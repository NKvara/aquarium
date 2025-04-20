import {ReactNode} from "react";
import {IoChevronDownOutline, IoChevronUpOutline} from "react-icons/io5";

const NavButton = ({icon, onClick}: {icon: ReactNode; onClick: () => void}) => {
  return (
    <div
      onClick={onClick}
      className="bg-primary p-2 rounded-full [&>svg]:text-2xl cursor-pointer"
    >
      {icon}
    </div>
  );
};

const Pagination = ({
  pages,
  currPage,
  event
}: {
  pages: string[];
  currPage: number;
  event: (i: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-10 fixed right-16 top-1/2 transform -translate-y-1/2 z-50">
      <NavButton
        icon={<IoChevronUpOutline />}
        onClick={() => {
          if (currPage - 1 >= 0) {
            event(currPage - 1);
          }
        }}
      />
      <div className="flex flex-col items-center gap-5">
        {pages.map((o, i) => (
          <div
            key={o}
            onClick={() => {
              if (i !== currPage) {
                event(i);
              }
            }}
            className="flex justify-center items-center rounded-full border-[1.5px] size-10 cursor-pointer"
            style={{
              borderColor:
                i === currPage ? "var(--color-primary)" : "rgba(0,0,0,0)"
            }}
          >
            <div
              className="size-3 bg-primary rounded-full transition-all"
              style={{
                backgroundColor:
                  i === currPage ? "var(--color-primary)" : "white"
              }}
            />
          </div>
        ))}
      </div>
      <NavButton
        icon={<IoChevronDownOutline />}
        onClick={() => {
          if (currPage < pages.length) {
            event(currPage + 1);
          }
        }}
      />
    </div>
  );
};

export default Pagination;
