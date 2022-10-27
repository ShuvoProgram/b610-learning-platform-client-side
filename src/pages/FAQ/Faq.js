import { Accordion } from 'flowbite-react';
import React from 'react';

const Faq = () => {
    return (
        <>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title>
                        What if I don’t like a course I purchased?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We want you to be satisfied, so all eligible courses purchased on Udemy can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy. 
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Where can I go for help?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor.

                            Our Help Center has extensive information regarding Udemy’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help. 
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Is there any way to preview a course?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Yes! Learn how to preview a course, and review key information about it. This article outlines how you can search Udemy’s ever-growing library, and find courses you’re interested in taking.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How do I take a ProForce course?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                             ProForce are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.

                            After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your ProForce account). You can also begin the course by logging in and navigating to your My learning page. 
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </>
    )
}

export default Faq;