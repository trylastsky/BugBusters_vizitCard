import React, { useEffect, useRef } from "react";

interface Props {
    onVisibilityChange: (isVisible: boolean) => void;
    children: React.ReactNode;
}

const WithIntersectionObserver: React.FC<Props> = ({ onVisibilityChange, children }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                onVisibilityChange(entry.isIntersecting);
            });
        });

        // Сохраним текущее значение ref.current
        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Используем сохраненное значение
            }
        };
    }, [onVisibilityChange]);

    return <div ref={ref}>{children}</div>;
};

export default WithIntersectionObserver;
