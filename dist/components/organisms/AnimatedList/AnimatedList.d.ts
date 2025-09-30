import { ReactNode } from "react";
interface AnimatedListProps {
    items?: string[];
    children?: ReactNode;
    onItemSelect?: (item: string | ReactNode, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    itemClassName?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;
}
declare const AnimatedList: ({ items, children, onItemSelect, showGradients, enableArrowNavigation, className, itemClassName, displayScrollbar, initialSelectedIndex, }: AnimatedListProps) => import("react/jsx-runtime").JSX.Element;
export default AnimatedList;
