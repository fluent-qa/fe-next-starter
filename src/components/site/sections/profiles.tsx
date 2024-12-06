import Image from 'next/image'

export default function ProfileSection() {
  return (
    <div className="mb-8">
      <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
      <h1 className="text-lg font-medium">Your Name</h1>
      <p className="text-sm text-neutral-600">Software Engineer</p>
    </div>
  )
}

