import Navbar from './components/navbar';
import Image from 'next/image';
export default function AboutUs() {
    return (
        <div class="container m-auto">
            <Navbar/>
            <div class="flex flex-col justify-center items-center">
                <p class="text-s m-40">
                Welcome to the School Mental Health Initiative!

At the School Mental Health Initiative, we believe that mental health is an integral part of a student’s overall wellbeing and that all students have the right to access quality mental health services. We also recognize the importance of creating a school environment that is conducive to mental health and wellbeing, and that supports the social-emotional development of all students.

The School Mental Health Initiative is a comprehensive online platform designed to help schools, educators, and parents support the mental health of students. Our goal is to provide school-based mental health resources, tools, and best practices to ensure that all students have access to the support they need. Additionally, our website provides resources for educators to better understand mental health issues, as well as strategies to help support their students’ emotional wellbeing.

We are proud to offer these valuable resources to help create an environment where students feel safe, supported, and empowered to reach their fullest potential. Thank you for being a part of the School Mental Health Initiative!</p>
                <Image src="/images/about.jpg" width={500} height={500} />
                    </div>
            <div class="flex flex-col justify-center items-center">
                <p class="text-s m-40">Dr. Bhoomika is a clinical psychologist with 10 years of experience in child mental health. She is an advocate for early intervention and prevention of mental health challenges in children. She specializes in treating anxiety, depression, ADHD, and other mental health issues in children. She has experience with a wide range of treatment modalities, including cognitive-behavioral therapy, play therapy, and family therapy. Dr. Bhoomika is passionate about helping families understand and navigate the complex challenges of parenting and mental health. She believes that with appropriate guidance and support, children can build resilience and lead fulfilling lives.</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class = "text-s m-40">Mayank is an engineer and co-founder of the School Mental Health Initiative. He has a passion for making a positive impact in the lives of young people and has dedicated his career to doing so. He has extensive experience in software development and operations, having worked in the tech industry prior to founding heal100. Mayank is also a strong advocate for mental health awareness and strives to create an open, supportive environment to enable people to reach their full potential. He is an innovative leader and passionate about creating effective solutions to promote mental health and well-being in educational settings.</p></div>
        </div>
    )
}