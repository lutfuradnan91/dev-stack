import logo from "../assets/logo-text.png"

const FooterSection = () => {
    return (
        <footer className='border-t border-gray-200 mt-20'>
            <div className='container mx-auto px-4 pt-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10'>

                    <div className='md:col-span-2'>
                        <img src={logo} alt="Dev Stack" className='h-8 w-auto object-contain' />
                        <p className='text-sm text-gray-500 mt-4 max-w-sm'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className='flex gap-5 mt-6 text-sm font-medium text-gray-900'>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className='hover:text-fuchsia-600'>GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className='hover:text-fuchsia-600'>Twitter</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className='hover:text-fuchsia-600'>LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-xs font-bold tracking-wider text-gray-900 mb-4'>PRODUCT</h4>
                        <ul className='flex flex-col gap-3 text-sm text-gray-500'>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-xs font-bold tracking-wider text-gray-900 mb-4'>COMPANY</h4>
                        <ul className='flex flex-col gap-3 text-sm text-gray-500'>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-xs font-bold tracking-wider text-gray-900 mb-4'>LEGAL</h4>
                        <ul className='flex flex-col gap-3 text-sm text-gray-500'>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-between gap-3 border-t border-gray-200 mt-12 py-6 text-sm text-gray-400'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;