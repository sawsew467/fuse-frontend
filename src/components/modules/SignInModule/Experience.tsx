import { useGLTF } from "@react-three/drei";

import { cn } from "@/lib/utils";

import ToolViewer from "@/components/modelViewers/ToolViewer";
import BookModel from "@/components/models/BookModel";
import StickyNote from "@/components/models/StickyNote";
import Pencil1 from "@/components/models/Pencil1";
import RuleModel from "@/components/models/Rule";
import CoffeeModel from "@/components/models/Coffee";
import DodecahedronModel from "@/components/models/Dodecahedron";
import TapeModel from "@/components/models/Tape";
import { motion } from "framer-motion";

export function Experience({ mode = "SIGNIN" }: { mode: "SIGNIN" | "SIGNUP" }) {
  return (
    <div className="relative z-40">
      <motion.div
        initial={{ opacity: 0, translateX: -1000, translateY: -1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[5%] top-[5%]" : "left-[60%] top-[40%]",
        )}
      >
        <ToolViewer mode={mode} width={320} height={300}>
          <BookModel rotation={[0, 1.2, -1.2]} scale={0.01} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[55%] top-[50%]" : "left-[0%] top-[60%]",
        )}
      >
        <ToolViewer mode={mode} width={320} height={300}>
          <DodecahedronModel rotation={[0.4, -0.5, 0]} scale={0.03} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-20 top-[70%]" : "left-[75%] top-[65%]",
        )}
      >
        <ToolViewer mode={mode} width={400} height={300}>
          <Pencil1 rotation={[-0.3, 0, -0.5]} scale={0.015} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[80%] top-[65%]" : "left-[20%] top-[30%]",
        )}
      >
        <ToolViewer
          mode={mode}
          width={320}
          height={300}
          orbitControlsProps={{ reverseOrbit: true }}
        >
          <RuleModel rotation={[0.5, 0, 0]} scale={0.01} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[80%] top-[5%]" : "left-[30%] top-[75%]",
        )}
      >
        <ToolViewer
          mode={mode}
          width={320}
          height={300}
          orbitControlsProps={{ reverseOrbit: true }}
        >
          <StickyNote rotation={[0.24, 0.8, 0]} scale={0.05} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[30%] top-[80%]" : "left-[5%] top-[5%]",
        )}
      >
        <ToolViewer
          mode={mode}
          width={320}
          height={300}
          orbitControlsProps={{ reverseOrbit: true }}
        >
          <CoffeeModel rotation={[0.8, 0, 0]} scale={0.02} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: -1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.1,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[30%] top-[-80px]" : "left-[80%] top-[5%]",
        )}
      >
        <ToolViewer
          mode={mode}
          width={320}
          height={300}
          orbitControlsProps={{ reverseOrbit: true }}
        >
          <TapeModel rotation={[0.4, -0.5, -0.3]} scale={0.03} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[20%] top-[40%]" : "left-[90%] top-[35%]",
        )}
      >
        <ToolViewer mode={mode} width={320} height={300}>
          <DodecahedronModel rotation={[0.4, -0.5, -0.3]} scale={0.02} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[60%] top-[-15%]" : "left-[65%] top-[75%]",
        )}
      >
        <ToolViewer mode={mode} width={320} height={300}>
          <CoffeeModel rotation={[0.8, 1, 0]} scale={0.01} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000, translateY: 1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.1,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[85%] top-[35%]" : "left-[25%] top-[-10%]",
        )}
      >
        <ToolViewer
          mode={mode}
          width={320}
          height={300}
          orbitControlsProps={{ reverseOrbit: true }}
        >
          <BookModel rotation={[0, 0.3, -1.2]} scale={0.007} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -1000, translateY: -1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[47%] top-[17%]" : "left-[-10%] top-[25%]",
        )}
      >
        <ToolViewer
          mode={mode}
          width={400}
          height={300}
          orbitControlsProps={{ reverseOrbit: true }}
        >
          <Pencil1 rotation={[-0.3, 1, -0.5]} scale={0.01} />
        </ToolViewer>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -1000, translateY: -1000 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed transition-all delay-1000 duration-2000 ease-out",
          mode === "SIGNUP" ? "left-[-5%] top-[35%]" : "left-[50%] top-[10%]",
        )}
      >
        <ToolViewer mode={mode} width={320} height={300}>
          <RuleModel rotation={[0.5, 1, 0.3]} scale={0.008} />
        </ToolViewer>
      </motion.div>
    </div>
  );
}

