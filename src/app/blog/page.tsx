import { getSortedPostsData } from '../../lib/posts';
import BlogClient from '../../components/BlogClient';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return <BlogClient posts={allPostsData} />;
}
