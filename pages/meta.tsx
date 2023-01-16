import Image from 'next/image';

const Meta = () => {
  return (
    <div>
      <Image
        src="/site/meta-image.jpg"
        alt="meta-image"
        width={1200}
        height={627}
      />
    </div>
  );
};

export default Meta;
