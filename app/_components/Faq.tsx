export const Faq =  () => {

    const faqsList = [
        {
            q: "Is Resume.in free to use?",
            a: "Yes, Resume.in is free to use. We offer a free version of our resume builder that includes all the features you need. You can also upgrade to a premium plan to access more features."
        },
        {
            q: "What is ATS checker?",
            a: "ATS stands for Applicant Tracking System. It is a software that helps employers manage the entire hiring process. An ATS checker is a tool that helps you optimize your resume for ATS. It checks your resume for formatting, keywords, and other factors that ATS look for."
        },
        {
            q: "How does Resume.in stand out from other resume builders?",
            a: "Resume.in is the best place to build, print, download and email your resume online for free. We’re here to help you and so, we offer text resumes and visual resumes for every solution. We offer a wide range of services related to resume creation."
        },
    ]

    return (
        <section className='py-14 bg-gray-900'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className='flex-1'>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-cyan-400'>
                            Frequently asked questions
                        </h3>
                        <p className='mt-3 text-white text-3xl font-extrabold sm:text-4xl'>
                            All information you need to know
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0'>
                    <ul className='space-y-4 divide-y divide-gray-700'>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
                                key={idx}>
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-200">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='mt-3 text-gray-300 leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};