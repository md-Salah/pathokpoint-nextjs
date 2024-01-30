const AvatarPlaceholder = ({ letter }: { letter: string }) => (
  <div className="avatar placeholder w-full h-full">
    <div className="bg-neutral text-neutral-content rounded-full w-24">
      <span className="text-3xl">{letter}</span>
    </div>
  </div>
);

export default AvatarPlaceholder;
