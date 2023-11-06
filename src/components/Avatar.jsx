import Image from "next/image"

const Avatar = () => {
  return (
    <Image className="w-10 h-10 rounded-full object-cover brightness-90" src="/images/avatar.png" alt="Jean Chane-to avatar" width={80} height={80} />
  )
}

export default Avatar