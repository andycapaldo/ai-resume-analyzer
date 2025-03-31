
interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
return (
        <div className="flex flex-col justify-around items-center h-screen">
            {children}
        </div>
    )
}