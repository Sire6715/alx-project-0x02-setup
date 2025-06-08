import React, {useState} from 'react'
import { type UserProps,PostModalProps } from '@/interfaces'


const PostModal :React.FC<PostModalProps> = ({onSubmit, onClose}) => {

const [post, setPost] = useState<UserProps>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>{
    const { name, value } = e.target;
    setPost((prevPost) => ({...prevPost, [name]: value}))
  }
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Create Post</h2>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
                        <input
                            name='title'
                            type="text"
                            value={post.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea
                            name='content'
                            value={post.content}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default PostModal