import { MiscHeader } from '@/micro-components';

const AboutUs = () => {
  return (
    <div className="bg-white pb-10">
      <MiscHeader title="About Us" subtitle="Your journey, our mission &mdash; helping you every step of the way." />
      <p className="layout-container layout-px mt-6 lg:mt-8 text-sm lg:text-base">
        We were students not long ago, and we know what it feels like to gather
        together savings from pocket money just to buy a few books. We&apos;ve been
        through those tough days, just like you.
        <br />
        <br />
        It was during the isolation of COVID-19, over a cup of tea at a local
        stall, that we dared to dream—a dream of creating a platform where
        students could buy books at the lowest possible price. That&apos;s when
        we decided to take the step of selling old books, making books a little
        more affordable.
        <br />
        <br />
        Today, that dream has become a reality. Our platform stands before you,
        offering not only old books but also new ones, along with original
        imported books, all at competitive prices—the best you&apos;ll find in
        Bangladesh. And we&apos;re not just about the books; we pride ourselves
        on providing top-notch customer service. For the first time in
        Bangladesh, we&apos;re even sending video previews in chats so you can
        see the exact condition of the books before buying.
        <br />
        <br />
        Yes, our vision has come to life. And now, through these books,
        you&apos;re connected to the readers who came before you—their love
        notes, written long before you were even born, still tucked inside the
        pages. Isn&apos;t that just magical?
      </p>
    </div>
  );
};

export default AboutUs;
