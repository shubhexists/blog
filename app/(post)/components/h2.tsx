import { withHeadingId } from "./utils";

export function H2({ children }) {
  return (
    <h2 className="group font-bold text-xl mt-8 mb-2 relative">
      {withHeadingId(children)}
    </h2>
  );
}
