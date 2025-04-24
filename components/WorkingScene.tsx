import { useGLTF } from '@react-three/drei';

// Model component that loads and renders the 3D models (person and computer)
const Model = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

// WorkingScene component that organizes the scene with the person and computer
const WorkingScene = () => {
  return (
    <>
      {/* Add Person Model */}
      <mesh position={[-3, -1, 0]}>
        <Model modelPath="/models/3d_person.glb" />
      </mesh>

      {/* Add Computer Model */}
      <mesh position={[3, -1, 0]}>
        <Model modelPath="/models/desktop_computer.glb" />
      </mesh>

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <ambientLight intensity={0.2} />
    </>
  );
};

export default WorkingScene;
