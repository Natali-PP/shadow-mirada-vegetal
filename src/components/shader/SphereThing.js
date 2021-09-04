// Based on https://codepen.io/al-ro/pen/jJJygQ by al-ro, but rewritten in react-three-fiber
import * as THREE from "three"
import React, { useRef, useMemo } from "react"
//import SimplexNoise from "simplex-noise"
import { useFrame, useLoader } from "@react-three/fiber"
import bg from "./seamless2.png"
import "./ShinyMaterial.js"
import { Sphere } from "@react-three/drei"

export default function Wall(props) {
  const material = useRef()
  const mesh = useRef()
  const [texture] = useLoader(THREE.TextureLoader, [bg])
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  useFrame(({ clock }, delta) => {
    material.current.time += delta + Math.sin(clock.elapsedTime / 10) / 1000
    mesh.current.rotation.x = Math.sin(clock.elapsedTime) * (Math.PI / 20)
    mesh.current.rotation.y = Math.cos(clock.elapsedTime) * (Math.PI / 20)
    mesh.current.scale.y = 0.9 + 0.1 * Math.sin(clock.elapsedTime)
    mesh.current.scale.x = 0.9 + 0.1 * Math.cos(clock.elapsedTime)
  })

  return (
    <>
      <mesh {...props} ref={mesh}>
        <sphereBufferGeometry attach="geometry" args={[20, 30, 30]} />

        <shinyMaterial ref={material} noiseTexture={texture} />
      </mesh>
    </>
  )
}
