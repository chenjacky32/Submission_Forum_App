import { RequiredDefaultProps } from '../components/Navigation';
import DiscussInput from '../components/DiscussInput';
import { Typography, Button, Card, CardBody, Avatar, CardFooter, IconButton } from '@material-tailwind/react';
export default function AddDiscuss() {
  return (
    <div className="mb-8 px-1.5 py-0.5">
      <Card className="!mx-12 !my-8" color="transparent" shadow={false} placeholder="" {...RequiredDefaultProps}>
        <CardBody placeholder="" {...RequiredDefaultProps}>
          <div className="flex flex-col items-center w-full max-w-4xl p-10 m-10 mx-auto bg-white rounded-xl">
            <Typography variant="h1" color="blue-gray" className="mb-5 text-3xl font-bold text-indigo-500 " placeholder="" {...RequiredDefaultProps}>
              Create a New Threads
            </Typography>
            <DiscussInput />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
