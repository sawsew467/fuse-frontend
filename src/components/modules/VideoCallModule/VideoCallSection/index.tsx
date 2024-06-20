"use client";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/hooks/redux-toolkit";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { round } from "lodash";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TMessage, fakeDataBasicInfoInormation, fakeMessageData } from "@/data/stuty-room-themes";
import {
  DrawingUtils,
  FilesetResolver,
  GestureRecognizer,
  GestureRecognizerResult,
} from "@mediapipe/tasks-vision";
import RedHeartIcon from "@public/icons/studyroom/heart";
import LikeIcon from "@public/icons/studyroom/like";


type GestureRecognizerType = GestureRecognizer | undefined;

const FormSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Vui lòng nhập tin nhắn trước khi gửi đi" }),
});

function VideoCallSection() {
  const { videoCall } = useAppSelector((state) => state.studyRoomController);

  const totalMembers = 4;
  const shape = round(Math.sqrt(totalMembers));
  const result = `grid-cols-${shape} grid-rows-${shape}`;
  const [chatState, setChatState] = useState<TMessage[]>(fakeMessageData);

  const [messageInput, setMessageInput] = useState<string | undefined>(
    undefined,
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      const { current: container } = messageContainerRef;
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState]);

  const handleSendMessage = () => {
    const dataSend: TMessage = {
      avatar: "https://i.ibb.co/qBNhB8Q/z4906224013507-d649511249cf5ef7e835baf8a498b877.jpg",
      from: "Vu Vu",
      message: messageInput!,
      role: "host",
      time: new Date().toLocaleTimeString().slice(0, -3),
    };
    setChatState([...chatState, dataSend]);
    setMessageInput("");
  };

  const handleSendMessageOnEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const demosSection = useRef<any>(null);
  const [gestureRecognizer, setGestureRecognizer] =
    useState<GestureRecognizerType>();
  const [webcamRunning, setWebcamRunning] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  const [lastVideoTime, setLastVideoTime] = useState(-1);
  const [results, setResults] = useState<GestureRecognizerResult | undefined>(
    undefined,
  );

  const [isCaptured, setIsCaptured] = useState(false);

  const [userAction, setUserAction] = useState<string>("");
  const [showLove, setShowLove] = useState(false);
  const [showLike, setShowLike] = useState(false);

  const createGestureRecognizer = async () => {
    try {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm",
      );
      const gest = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 2,
      });

      setGestureRecognizer(gest);
      demosSection.current?.classList.remove("invisible");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createGestureRecognizer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasGetUserMedia = () => {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };

  const handleWebcam = () => {
    if (hasGetUserMedia()) {
      enableCam();
    } else {
      console.warn("getUserMedia() is not supported by your browser");
    }
  };
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const enableCam = async () => {
    if (!gestureRecognizer) {
      return;
    }

    if (webcamRunning) {
      // Stop the webcam
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      setWebcamRunning(false);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      return; // Exit the function after stopping the webcam
    } else {
      setWebcamRunning(true);
    }
    const constraints = {
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current?.addEventListener("loadeddata", predictWebcam);
        console.log(videoRef.current);
      }
    });
  };

  const predictWebcam = async () => {
    if (!videoRef.current) return;
    if (!gestureRecognizer) return;
    if (!canvasElementRef.current) return;
    if (videoRef.current.videoWidth <= 0 || videoRef.current.videoHeight <= 0) {
      console.error("Video dimensions are not valid");
      return;
    }

    let newResults = results;
    const webcamElement = document.getElementById("webcam");
    let nowInMs = Date.now();
    if (videoRef.current.currentTime !== lastVideoTime) {
      setLastVideoTime(videoRef.current.currentTime);
      newResults = gestureRecognizer.recognizeForVideo(
        videoRef.current,
        nowInMs,
      );
    }
    // Ensure the video has valid dimensions

    if (newResults && newResults.gestures?.[0]?.[0]?.categoryName) {
      if (newResults.gestures[0][0].categoryName === "Thumb_Up") {
        setUserAction(newResults.gestures[0][0].categoryName);
      }
    }

    const canvasCtx = canvasElementRef.current?.getContext("2d");
    if (!canvasCtx) return;
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      canvasElementRef.current.width,
      canvasElementRef.current.height,
    );
    const drawingUtils = new DrawingUtils(canvasCtx);
    if (!webcamElement) return;
    canvasElementRef.current.style.height = "540px";
    webcamElement.style.height = "100%";
    canvasElementRef.current.style.width = "720px";
    webcamElement.style.width = "100%";
    webcamElement.style.objectFit = "cover";

    if (newResults && newResults.landmarks) {
      for (const landmarks of newResults.landmarks) {
        drawingUtils.drawConnectors(
          landmarks,
          GestureRecognizer.HAND_CONNECTIONS,
          {
            color: "#00FF00",
            lineWidth: 5,
          },
        );
        drawingUtils.drawLandmarks(landmarks, {
          color: "#FF0000",
          lineWidth: 2,
        });
      }
    }
    canvasCtx.restore();

    if (webcamRunning === true) {
      window.requestAnimationFrame(predictWebcam);
    }

    if (newResults && newResults.landmarks) {
      //
      const landmark0_3 = newResults.landmarks[0]?.[3];
      const landmark0_6 = newResults.landmarks[0]?.[6];
      const landmark0_7 = newResults.landmarks[0]?.[7];

      //
      const landmark0_4 = newResults.landmarks[0]?.[4];
      const landmark1_8 = newResults.landmarks[1]?.[8];
      const landmark1_4 = newResults.landmarks[1]?.[4];
      const landmark0_8 = newResults.landmarks[0]?.[8];

      if (landmark0_8) {
        const nextButton = {
          x: 0.09411006420850754,
          y: 0.5331868529319763,
        };
        const prevButton = {
          x: 0.9059846997261047,
          y: 0.5252099633216858,
        };
        //right hand
        if (
          Math.abs(landmark0_8.x - nextButton.x) <= 0.06 &&
          Math.abs(landmark0_8.y - nextButton.y) <= 0.06
        ) {
        } else {
        }
        if (
          Math.abs(landmark0_8.x - prevButton.x) <= 0.06 &&
          Math.abs(landmark0_8.y - prevButton.y) <= 0.06
        ) {
        } else {
        }
      }

      if (landmark1_8) {
        const nextButton = {
          x: 0.09411006420850754,
          y: 0.5331868529319763,
        };
        const prevButton = {
          x: 0.9059846997261047,
          y: 0.5252099633216858,
        };

        //left hand
        if (
          Math.abs(landmark1_8.x - nextButton.x) <= 0.06 &&
          Math.abs(landmark1_8.y - nextButton.y) <= 0.06
        ) {
        } else {
        }
        if (
          Math.abs(landmark1_8.x - prevButton.x) <= 0.06 &&
          Math.abs(landmark1_8.y - prevButton.y) <= 0.06
        ) {
        } else {
        }
      }
      if (
        landmark0_3 &&
        landmark0_6 &&
        landmark0_7 &&
        landmark0_8 &&
        landmark0_4
      ) {
        if (
          Math.abs(landmark0_3?.x - (landmark0_6?.x + landmark0_7?.x) / 2) <=
            0.03 &&
          Math.abs(landmark0_3?.y - (landmark0_6?.y + landmark0_7?.y) / 2) <=
            0.03 &&
          Math.abs(landmark0_4?.x - landmark0_8?.x) >= 0.07
        ) {
          setUserAction("love");
        }
      }

      if (landmark0_4 && landmark1_8 && landmark1_4 && landmark0_8) {
        const x0_4 = landmark0_4.x;
        const y0_4 = landmark0_4.y;
        const x1_8 = landmark1_8.x;
        const y1_8 = landmark1_8.y;
        const x1_4 = landmark1_4.x;
        const y1_4 = landmark1_4.y;
        const x0_8 = landmark0_8.x;
        const y0_8 = landmark0_8.y;

        if (
          Math.abs(landmark0_4?.x - landmark1_4?.x) <= 0.03 &&
          Math.abs(landmark0_4?.y - landmark1_4?.y) <= 0.03 &&
          Math.abs(landmark0_8?.x - landmark1_8?.x) <= 0.03 &&
          Math.abs(landmark0_8?.y - landmark1_8?.y) <= 0.03 &&
          Math.abs(landmark0_8?.y - landmark0_4?.y) >= 0.1
        ) {
          setUserAction("love");
        }

        if (
          Math.abs(x0_4 - x1_8) < 0.03 &&
          Math.abs(x1_4 - x0_8) < 0.03 &&
          Math.abs(y0_4 - y1_8) < 0.03 &&
          Math.abs(y1_4 - y0_8) < 0.03
        ) {
        }
      }
    }

    setResults(newResults);
  };

  useEffect(() => {
    if (videoCall.isOpenVideo) {
      handleWebcam();
    } else {
      handleWebcam();
      return;
    }
  }, [videoCall.isOpenVideo]);

  console.log("ACTION", userAction);
  console.log("LIKE", showLike);
  console.log("LOVE", showLove);
  useEffect(() => {
    if (userAction === "love") {
      setShowLove(true);
      const timer = setTimeout(() => {
        setShowLove(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [userAction]);
  useEffect(() => {
    if (userAction === "Thumb_Up") {
      setShowLike(true);
      const timer = setTimeout(() => {
        setShowLike(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [userAction]);

  return (
    <div className="h-[calc(100vh-180px)] w-full rounded-lg bg-white/40 p-2 backdrop-blur-sm">
      <div
        className={cn(
          "flex h-full w-full flex-row overflow-hidden rounded-lg",
          videoCall.isOpenChat ? "gap-2" : "gap-0",
        )}
      >
        <div
          className={cn(
            "h-full w-[75%] rounded-lg transition-all duration-300",
            videoCall.isOpenChat ? "w-[75%]" : "w-full",
            "flex-rowg flex gap-2",
          )}
        >
          <div
            ref={demosSection}
            className="z-20 h-full w-[60%] rounded-lg bg-white/60"
          >
            {webcamRunning ? (
              <div className="h-full w-full">
                <video
                  id="webcam"
                  autoPlay
                  playsInline
                  ref={videoRef}
                  onLoadedData={predictWebcam}
                  className="animate-fade rounded-lg"
                  style={{ transform: "rotateY(180deg)" }}
                ></video>
                <canvas
                  ref={canvasElementRef}
                  className="output_canvas"
                  id="output_canvas"
                  width="800"
                  height="720"
                  style={{ position: "absolute", display: "none" }}
                ></canvas>
                {showLove && (
                  <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-4">
                      <RedHeartIcon size={60} className="animate-ping" />
                      <RedHeartIcon size={100} className="animate-ping" />
                      <RedHeartIcon size={60} className="animate-ping" />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <RedHeartIcon size={50} className="animate-ping" />
                      <RedHeartIcon size={60} className="animate-ping" />
                      <RedHeartIcon size={100} className="animate-ping" />
                      <RedHeartIcon size={60} className="animate-ping" />
                      <RedHeartIcon size={50} className="animate-ping" />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <RedHeartIcon size={100} className="animate-ping" />
                    </div>
                  </div>
                )}

                {showLike && (
                  <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-4">
                      <LikeIcon
                        size={60}
                        color="#fec336"
                        className="animate-ping"
                      />
                      <LikeIcon
                        size={100}
                        color="#fec336"
                        className="animate-ping"
                      />
                      <LikeIcon
                        size={60}
                        color="#fec336"
                        className="animate-ping"
                      />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <LikeIcon
                        size={50}
                        color="#fec336"
                        className="animate-ping"
                      />
                      <LikeIcon
                        size={60}
                        color="#fec336"
                        className="animate-ping"
                      />
                      <LikeIcon
                        size={100}
                        color="#fec336"
                        className="animate-ping"
                      />
                      <LikeIcon
                        size={60}
                        color="#fec336"
                        className="animate-ping"
                      />
                      <LikeIcon
                        size={50}
                        color="#fec336"
                        className="animate-ping"
                      />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <LikeIcon
                        size={100}
                        color="#fec336"
                        className="animate-ping"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <div className="rounded-full  border-2 border-primary">
                  <Image
                    src={"https://i.ibb.co/qBNhB8Q/z4906224013507-d649511249cf5ef7e835baf8a498b877.jpg"}
                    alt="Avatar"
                    width={120}
                    height={120}
                    className="rounded-full object-cover  h-[120px] w-[120px]"
                    unoptimized
                  />
                </div>
                <h4 className="text-xl font-bold">Vũ Vũ</h4>
              </div>
            )}
          </div>

          <div className="h-full w-[40%] rounded-lg bg-white/60">
            <div className="flex h-full w-full flex-col gap-2 overflow-auto p-2">
              {fakeDataBasicInfoInormation.map((_, index) => (
                <div
                  key={index}
                  className="flex h-[40%] w-full flex-col items-center justify-center rounded-lg bg-white/60"
                >
                  <div className="border-2 border-primary rounded-full">
                    <Image
                      src={_.avatar}
                      alt="Avatar"
                      width={80}
                      height={80}
                      className="rounded-full h-[80px] w-[80px] object-cover"
                      unoptimized
                    />
                  </div>
                  <h4>{_.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "h-full w-[75%] rounded-lg bg-white/60 transition-all duration-300",
            videoCall.isOpenChat ? "w-[25%]" : "w-0",
          )}
        >
          <div className="flex h-full w-full flex-col gap-2 p-2">
            <div className="w-full">
              <h3 className="font-title text-2xl">Chat</h3>
              <div className="border-b-2 border-black"></div>
            </div>
            <div
              ref={messageContainerRef}
              className="flex h-full w-full flex-col gap-2 overflow-auto rounded-lg bg-white/60 p-2 scrollbar-hide"
            >
              {chatState.map((_, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                  <div className="rounded-full border-2 border-primary">
                    <Image
                      src={_.avatar}
                      alt="image"
                      height={200}
                      width={200}
                      className="h-[40px] object-cover w-[40px] rounded-full"
                      unoptimized
                    />
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-full flex-row items-center justify-between gap-2">
                      <p className="text-sm font-bold">{_.from}</p>
                      <div className="flex flex-row gap-2">
                        {/* <p className="rounded-lg bg-primary px-1 py-[2px] text-[10px] text-white">
                        {_.role}
                      </p> */}
                        <p className="text-[12px]">{_.time}</p>
                      </div>
                    </div>
                    <p className="w-full text-start text-sm">{_.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-fit w-full">
              <Form {...form}>
                <form onSubmit={() => {}}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Nhập tin nhắn"
                            className="resize-none"
                            {...field}
                            value={messageInput}
                            onChange={(e) => {
                              setMessageInput(e.target.value);
                            }}
                            onKeyDown={(e) => handleSendMessageOnEnter(e)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCallSection;
