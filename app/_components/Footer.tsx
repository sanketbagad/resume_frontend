export const Footer = () => {

    const footerNavs = [
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
                {
                    href: 'javascript:void()',
                    name: 'Documentation'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        },
        {
            label: "Explore",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Showcase'
                },
                {
                    href: 'javascript:void()',
                    name: 'Roadmap'
                },
                {
                    href: 'javascript:void()',
                    name: 'Languages'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
            ]
        },
        {
            label: "Company",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Partners'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        }
    ]

    return (
        <footer className="bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">    
                <div className="py-4 border-t border-gray-700 items-center justify-between sm:flex sm:justify-center sm:items-center">
                    <p className="text-gray-300">© 2024 Resume.in Inc. All rights reserved.</p>
                    
                </div>
            </div>
        </footer>
    )
}