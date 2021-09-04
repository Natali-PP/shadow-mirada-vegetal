import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"
//0.5337
const ShinyMaterial = shaderMaterial(
  { baseSpeed: 0.05, noiseTexture: null, noiseScale: 0.1, alpha: 1.0, time: 10.0 },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `,
  `
  uniform sampler2D baseTexture;
  uniform float baseSpeed;
  uniform sampler2D noiseTexture;
  uniform float noiseScale;
  uniform float alpha;
  uniform float time;
  uniform vec2 resolution;

  varying vec2 vUv;
  void main()
  {
    vec2 uvTimeShift = mix(vUv, vUv*vec2( -0.1, 0.9 ) * time * baseSpeed,time*.5); 
    //viejo:
    //vec2 uvTimeShift = vUv + vec2( -0.3, 1.5 ) * time * baseSpeed;
    vec4 noiseGeneratorTimeShift = texture2D( noiseTexture, uvTimeShift );
    vec2 uvNoiseTimeShift = vUv + noiseScale * vec2( noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.b );
    vec4 baseColor = texture2D( baseTexture, uvNoiseTimeShift );

    baseColor.a = alpha;
    gl_FragColor = mix(baseColor,vec4(uvNoiseTimeShift,uvNoiseTimeShift),sin(uvTimeShift.x));
  }
  `,
  (self) => {
    self.side = THREE.DoubleSide
  },
)

extend({ ShinyMaterial })
