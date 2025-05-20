import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedHeading, AnimatedText, Card, DecorativeBackground } from '../components/ui';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 'tax-planning-tips',
    title: 'Essential Tax Planning Tips for the Current Financial Year',
    excerpt: 'Learn key strategies to optimize your tax savings and ensure compliance.',
    date: 'October 26, 2023',
    link: '/blog/tax-planning-tips',
    image: 'https://images.unsplash.com/photo-1593620659530-efb4f45cd7e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with actual image
  },
  {
    id: 'gst-updates',
    title: 'Latest GST Updates You Need to Know',
    excerpt: 'Stay informed about the recent changes and updates in GST regulations.',
    date: 'October 20, 2023',
    link: '/blog/gst-updates',
    image: 'https://images.unsplash.com/photo-1507831143887-ef09c6081cce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with actual image
  },
  {
    id: 'startup-compliance',
    title: 'Key Compliance Requirements for Startups in India',
    excerpt: 'Understanding the essential legal and financial compliance for new ventures.',
    date: 'October 15, 2023',
    link: '/blog/startup-compliance',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with actual image
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Knowledge Center | CA VEERLAPATI Santhosh - Chartered Accountant Nalgonda</title>
        <meta name="description" content="Stay updated with the latest articles and insights on accounting, taxation, and business from CA VEERLAPATI Santhosh in Nalgonda." />
      </Helmet>

      <AnimatedSection className="relative py-20 bg-white overflow-hidden">
        <DecorativeBackground />
        <div className="container relative z-10 text-center">
          <AnimatedHeading>
            Knowledge Center
          </AnimatedHeading>
          <AnimatedText className="mt-4 max-w-3xl mx-auto text-xl">
            Explore articles and insights on finance, tax, and business.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link to={post.link} key={post.id}>
                <Card className="h-full" hover={true}>
                  {post.image && (
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {post.excerpt}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                    <div className="inline-flex items-center text-primary-600 hover:text-primary-700">
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Add a CTA section similar to other pages if desired */}
      {/* <AnimatedSection className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <AnimatedHeading className="text-white mb-6">
            Have a Topic Suggestion?
          </AnimatedHeading>
          <AnimatedText className="text-primary-100 mb-8">
            Let us know what financial topics you'd like to learn more about.
          </AnimatedText>
          <Button variant="secondary" size="lg" as={Link} to="/contact">
            Suggest a Topic
          </Button>
        </div>
      </AnimatedSection> */}
    </>
  );
} 