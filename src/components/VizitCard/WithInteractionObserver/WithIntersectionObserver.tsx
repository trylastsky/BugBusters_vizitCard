// src/WithIntersectionObserver.tsx

import React, { useEffect, useRef} from "react";

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [onVisibilityChange]);

    return <div ref={ref}>{children}</div>;
};

export default WithIntersectionObserver;
