import LightRays from "./hero-background"


export const BackGroundLight =()=>{ 
return <>
     <div className="absolute inset-0 z-1 bg-black">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={7}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
</>
}