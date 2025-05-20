import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, DecorativeBackground } from '../components/ui';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon } from '@heroicons/react/20/solid';

// Placeholder data for a blog post - replace with actual data source
const blogPostData = {
  'tax-planning-tips': {
    title: 'Essential Tax Planning Tips for the Current Financial Year',
    author: 'CA VEERLAPATI Santhosh',
    date: 'October 26, 2023',
    image: '/placeholder-blog-detail.jpg', // Replace with actual image
    content: [
      "Planning your taxes effectively is crucial for optimizing your financial health and ensuring compliance with the latest regulations. As the financial year progresses, it's important to review your income and expenses and take advantage of available deductions and exemptions.",
      "One of the most common tax-saving avenues is investing in instruments eligible under Section 80C of the Income Tax Act. This includes Public Provident Fund (PPF), Employees' Provident Fund (EPF), National Pension System (NPS), Equity Linked Savings Schemes (ELSS), life insurance premiums, and children's tuition fees, among others. The maximum deduction allowed under Section 80C is currently ₹1.5 lakh.",
      "Apart from Section 80C, there are other sections that offer tax benefits. For instance, Section 80D allows deductions for health insurance premiums, Section 24 allows deduction on interest paid on housing loans, and Section 80G provides deductions for certain donations. Understanding these provisions and planning your investments and expenses accordingly can significantly reduce your tax burden.",
      "It's also important to keep track of your income from all sources, including salary, house property, business or profession, capital gains, and other sources. Accurate reporting of all income is essential for compliance. Maintain proper records of your income and expenses throughout the year to facilitate smooth tax filing.",
      "Tax laws are subject to change, and staying updated is vital. Consulting with a chartered accountant can provide personalized guidance based on your specific financial situation and help you navigate the complexities of tax planning. A professional can help you identify all eligible deductions and ensure accurate filing.",
      "In conclusion, proactive tax planning throughout the financial year is key to maximizing savings and ensuring compliance. Don't wait until the last minute to think about your taxes. Start early, understand the available options, and seek professional advice to make informed decisions."
    ]
  }
  // Add more blog post data as needed
};

export default function BlogDetail() {
  const { blogId } = useParams();
  const post = blogPostData[blogId];

  if (!post) {
    return <AnimatedSection className="py-20 text-center">Blog post not found.</AnimatedSection>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content={post.content[0].substring(0, 160)} /> {/* Use first paragraph as description */}
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            {post.title}
          </AnimatedHeading>
          <div className="flex items-center justify-center text-secondary-600 mt-4 space-x-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <UserIcon className="w-5 h-5 inline-block mr-1" />{post.author}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <CalendarIcon className="w-5 h-5 inline-block mr-1" />{post.date}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
           {post.image && (
              <motion.img
                 src={post.image}
                 alt={post.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="w-full h-96 object-cover rounded-lg shadow-md mb-12"
              />
           )}
          <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
            {post.content.map((paragraph, index) => (
              <AnimatedText key={index} delay={0.1 + index * 0.1}>
                {paragraph}
              </AnimatedText>
            ))}
          </div>
          {/* Add a Back button or related posts section if desired */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: post.content.length * 0.1 + 0.2 }}
             className="mt-12 text-center"
           >
             <Link to="/blog" className="text-primary-600 hover:text-primary-800 font-semibold text-lg">
               &larr; Back to Knowledge Center
             </Link>
           </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
} 