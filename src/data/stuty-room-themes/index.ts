export interface IThemes {
    id: string;
    name: string;
    imageBackground: string;
    videoBackground: string;
    audio: string;
};

export const themes: IThemes[] = [
    {
        id: 'd6f9a6e2-4ed4-4a8e-9e6f-1b5f716d81e1', // Example UUID
        name: "Jappanese room", 
        imageBackground: "https://res.cloudinary.com/dy1uuo6ql/image/upload/v1718549075/Fuse_Theme_Background_Image/sxwgcltd68dsxlxvm2pk.png",
        videoBackground: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718548955/Fuse_Theme_Background/xutsugcgoqjggzdgpgna.mp4",
        audio: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718547654/Music/itrfsbytdmmad4m3azvk.mp4",
    },
    {
        id: 'a7c0a8d2-3b1e-4d5c-a3b2-8d9b8c2d9b8d', // Example UUID
        name: "Castle langscape",
        imageBackground: "https://res.cloudinary.com/dy1uuo6ql/image/upload/v1718549484/Fuse_Theme_Background_Image/lj815p7a9bfcsmzu9iga.png",
        videoBackground: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718549290/Fuse_Theme_Background/pmffzmeftonapdnwd07y.mp4",
        audio: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718549295/Music/pkl4tarngqv6r18crrs6.ogg",
    },
    {
        id: 'e3a2b3c1-5c4b-4a6c-8b3a-9c2d8e1f9b7a', // Example UUID
        name: "Raining Town",
        imageBackground: "https://res.cloudinary.com/dy1uuo6ql/image/upload/v1718549658/Fuse_Theme_Background_Image/ojeoesrbu0a0hqrtoowr.png",
        videoBackground: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718549590/Fuse_Theme_Background/ucrt64iwtg0ksrjd2rlf.mp4",
        audio: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718552685/Music/rlwfeiycuoi0arxoydku.ogg",
    },
    {
        id: 'b5c3d7e2-2c6f-4b7e-9f4c-7d5e8c1a9b6d', // Example UUID
        name: "Lofi Coffee",
        imageBackground: "https://res.cloudinary.com/dy1uuo6ql/image/upload/v1718552867/Fuse_Theme_Background_Image/bct1bw2hrggzz6uba6jb.png",
        videoBackground: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718552822/Fuse_Theme_Background/khkihtb164vhystspcbx.mp4",
        audio: "https://res.cloudinary.com/dy1uuo6ql/video/upload/v1718553021/Music/lh1tirbcfwvbpeww8nfm.mp4",
    },
] as const;

export type TMessage = {
    avatar: string;
    message: string;
    from: string;
    role: string;
    time: string;
  };
  export const fakeMessageData: TMessage[] = [
    {
      avatar: "https://i.ibb.co/qNspdpx/Club-leader-photo.webp",
      from: "Trần Văn Bảo Thắng",
      message: "Hello world",
      role: "Joinner",
      time: "08:20:00",
    },
    {
      avatar: "https://i.ibb.co/RgHWmXb/MG-5515-op2-1.png",
      from: "Nguyễn Văn Duy Khang",
      message: "Good morning everyone!",
      role: "Member",
      time: "08:25:00",
    },
    {
      avatar: "https://i.ibb.co/TgXZgwv/445356269-973328174802658-3860307921523704298-n.jpg",
      from: "Lê Đức Anh Phương",
      message: "Did you finish the project?",
      role: "Member",
      time: "08:30:00",
    },
    {
      avatar: "https://i.ibb.co/TgXZgwv/445356269-973328174802658-3860307921523704298-n.jpg",
      from: "Nguyễn Văn Duy Khang",
      message: "Yes, I sent it to the client.",
      role: "Manager",
      time: "08:35:00",
    },
    {
      avatar: "https://i.ibb.co/qNspdpx/Club-leader-photo.webp",
      from: "Trần Văn Bảo Thắng",
      message: "Great job!",
      role: "Joinner",
      time: "08:40:00",
    },
    {
      avatar: "/avatar_image/Khang_avatar.svg",
      from: "Nguyễn Văn Duy Khang",
      message: "Let's discuss the new task in the meeting.",
      role: "Member",
      time: "08:45:00",
    },
    {
      avatar: "https://i.ibb.co/TgXZgwv/445356269-973328174802658-3860307921523704298-n.jpg",
      from: "Lê Đức Anh Phương",
      message: "Sure, I will prepare the slides.",
      role: "Member",
      time: "08:50:00",
    },
    {
      avatar: "https://i.ibb.co/qNspdpx/Club-leader-photo.webp",
      from: "Trần Văn Bảo Thắng",
      message: "Please make sure to include the latest updates.",
      role: "Manager",
      time: "08:55:00",
    },
    {
      avatar: "https://i.ibb.co/qNspdpx/Club-leader-photo.webp",
      from: "Trần Văn Bảo Thắng",
      message: "When is the meeting?",
      role: "Joinner",
      time: "09:00:00",
    },
    {
      avatar: "https://i.ibb.co/RgHWmXb/MG-5515-op2-1.png",
      from: "Nguyễn Văn Duy Khang",
      message: "It's at 10 AM in the main conference room.",
      role: "Member",
      time: "09:05:00",
    },
  ];


  export type TBasicInfoInRoom = {
    avatar: string;
    name: string;
  }

  export const fakeDataBasicInfoInormation: TBasicInfoInRoom[] = [

    {
      avatar: "https://i.ibb.co/qNspdpx/Club-leader-photo.webp",
      name: "Trần Văn Bảo Thắng",
    },
    {
      avatar: "https://i.ibb.co/TgXZgwv/445356269-973328174802658-3860307921523704298-n.jpg",
      name: "Lê Đức Anh Phương",
    },
    {
      avatar: "/avatar_image/Khang_avatar.svg",
      name: "Nguyễn Văn Duy Khang",
    }
  ];
