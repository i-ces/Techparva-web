
export default function AnimateLogo({cls,name}:{cls:string,name:string}) {
  return (
    <img
      src={name}
      alt="Design"
      className={`absolute pointer-events-none select-none w-16 h-16 opacity-40 animate-float-slow z-0 ${cls}`}
    />
  );
}
