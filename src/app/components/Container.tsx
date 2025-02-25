
interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
return (
        <div className="flex justify-center items-center h-screen">
            {children}
        </div>
    )
}