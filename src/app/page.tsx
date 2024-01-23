"use client";

export default function Home() {

  return (
    <main className="pl-8 pt-8 min-h-screen">
      <div className="text-2xl">
        <p className="font-bold">Bold: This is an English text</p>
        <p className="font-bold">Bold: এটি বাংলা লেখা</p>
        <br />

        <p className="font-semibold">Semibold: This is an English text</p>
        <p className="font-semibold">Semibold: এটি বাংলা লেখা</p>
        <br />

        <p className="font-normal">Normal: This is an English text</p>
        <p className="font-normal">Normal: এটি বাংলা লেখা</p>
        <br />

        <p className="font-light">Light: This is an English text</p>
        <p className="font-light">Light: এটি বাংলা লেখা</p>
      </div>

      <div className="mt-8 gap-1 flex">
        <button className="btn">Button</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>

      <div className="mt-8 gap-1 flex">
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>

      <div className="mt-8 gap-1 flex">
        <button className="btn btn-ghost btn-outline">Ghost</button>
        <button className="btn btn-outline btn-info">Info</button>
        <button className="btn btn-outline btn-success">Success</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        <button className="btn btn-outline btn-error">Error</button>
      </div>

    </main>
  );
}
