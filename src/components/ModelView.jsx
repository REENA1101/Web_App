import { View } from "@react-three/drei"

export default function ModelView({index, groupRef, gsapType, controlRef,setRotationSize, size, item  }) {
  return (
    <div>
      <View
        index = {index}
        id={gsapType}
        className={`border-2 border-red-500 w-full h-full ${index===2} ? 'right-[-100%] :''`}
    >
      <ambientLight intensity = {0.3}/>
     </View>
    </div>
  )
}
