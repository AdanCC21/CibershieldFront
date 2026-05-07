export default function Footer() {
    return (
        <footer className='flex justify-between items-center w-screen h-[8vh] bg-[#F8F8F8] text-(--text-gray) px-[8vh]'>
            <div className='flex flex-col gap-2'>
                <span className='text-xs'>@Cibershield</span>
            </div>
            <div className='flex flex-col gap-2 text-right'>
                <span className='text-xs'>@Antonio Ramos Gonzalez</span>
                <span className='text-xs'>@Adan Gonzalez Ceseña</span>
            </div>
        </footer>
    )
}
