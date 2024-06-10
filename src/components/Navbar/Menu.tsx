"use client";
import Link from "next/link";
import { useState } from "react";

import { HambugerIcon } from "@/micro-components";
import { Drawer } from "@/components";
import { categories, publishers, authors } from "@/constants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>
        <HambugerIcon />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="menu px-0">
          {/* Islamic Category */}
          <li>
            <details>
              <summary className="menu-item">
                <h3>ইসলামিক ক্যাটাগরি</h3>
              </summary>
              <div className="h-48 overflow-y-scroll">
                <ul>
                  {categories.map((category) => (
                    <Item
                      key={category.name}
                      name={category.name}
                      slug={"category/" + category.slug}
                    />
                  ))}
                </ul>
              </div>
            </details>
          </li>

          {/* Publishers */}
          <li>
            <details>
              <summary className="menu-item">
                <h3>প্রকাশনী</h3>
              </summary>
              <div className="h-48 overflow-y-scroll">
                <ul>
                  {publishers.map((publisher) => (
                    <Item
                      key={publisher.name}
                      name={publisher.name}
                      slug={"publisher/" + publisher.slug}
                    />
                  ))}
                </ul>
              </div>
            </details>
          </li>

          {/* Authors */}
          <li>
            <details open>
              <summary className="menu-item">
                <h3>লেখক</h3>
              </summary>
              <div className="h-48 overflow-y-scroll">
                <ul>
                  {authors.map((author) => (
                    <Item
                      key={author.name}
                      name={author.name}
                      slug={"author/" + author.slug}
                    />
                  ))}
                </ul>
              </div>
            </details>
          </li>

          {/* Additional Items */}
          <li className="menu-item">
            <Link
              href={"tag/boi-mela-2024"}
              className="w-full hover:bg-[#FF82001A]"
            >
              বইমেলা ২০২৪
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Menu;

const Item = ({ name, slug }: { name: string; slug: string }) => (
  <li
    className={`font-bn hover:bg-[#FF82001A] hover:text-primary hover:opacity-100`}
  >
    <Link href={slug} className="hover:bg-[#FF82001A]">
      {name}
    </Link>
  </li>
);
