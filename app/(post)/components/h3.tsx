import { withHeadingId } from "./utils";

export function H3({ children }) {
  return (
    <h3 className="group font-bold text-lg mt-8 mb-2 relative">
      {withHeadingId(children)}
    </h3>
  );
}
