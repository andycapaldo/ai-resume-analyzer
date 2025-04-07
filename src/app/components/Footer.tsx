import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center h-1/6 w-full border-t-2 mt-5 border-coolGray">
            <a target="_blank" href='https://github.com/andycapaldo/ai-resume-analyzer' className='hover:text-accentCoral hover:underline hover:underline-offset-4'>
                <div className='flex items-center mb-2'>
                    <FontAwesomeIcon className='px-2' icon={faGithub} />
                    Built with Next.js and Tailwind CSS
                </div>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/andrew-capaldo' className='hover:text-accentCoral hover:underline hover:underline-offset-4'>
                <div className='flex items-center mb-2'>
                    <FontAwesomeIcon className='px-2' icon={faLinkedin} />
                    Connect with me on LinkedIn
                </div>
            </a>
        </div>
    )
}
export default Footer