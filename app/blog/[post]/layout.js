const Bloglayout = ({ children }) => {
    return children;
};

export default Bloglayout;

export async function generateMetadata({ params }) {
    return {
        title: params.post.split("-").join(" ")
    }
}
