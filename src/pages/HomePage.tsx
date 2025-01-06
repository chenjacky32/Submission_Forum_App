import { useDispatch, useSelector } from 'react-redux';
import FormatDate from '../utils/FormatDate';
import { Link } from 'react-router-dom';
import { asyncGetThreadAndUsers, asyncUpVoteThread, asyncDownVoteThread, asyncNeutralizeThreadVote } from '../states/ThreadandUsers/action';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../states';
import { Typography, Button, Card, CardBody, Avatar, CardFooter, IconButton } from '@material-tailwind/react';
import { GetThreadPayload, GetUsersPayload } from '../global-types/types';
import { FaThumbsUp, FaThumbsDown, FaRegCommentDots, FaPlus } from 'react-icons/fa';
import { RequiredDefaultProps } from '../components/Navigation';
import parse from 'html-react-parser';
import * as React from 'react';

function HomePage() {
  const { users, threads } = useSelector((state: RootState) => state.ThreadAndUser);
  const { profile, isLogin } = useSelector((state: RootState) => state.auth);
  const [selectActive, setSelectedActive] = React.useState<string | null>(null);

  const dispatch: AppDispatch = useDispatch();

  const filterThreadByCategory = (category: string) => {
    if (selectActive === category) {
      setSelectedActive(null);
    } else {
      setSelectedActive(category);
    }
  };

  const getThreadByCategory = !selectActive ? threads : threads.filter((item: GetThreadPayload) => item.category === selectActive);

  function EventHandlerNeutralize(threadId: string) {
    dispatch(asyncNeutralizeThreadVote({ threadId, userId: profile.id }));
  }

  function EventHandlerVoteUp(threadId: string) {
    const ThreadSelected = threads.find((item) => item.id === threadId);
    if (ThreadSelected.upVotesBy.includes(profile.id)) {
      dispatch(asyncUpVoteThread({ threadId, userId: profile.id }));
    } else {
      EventHandlerNeutralize(threadId);
    }
  }
  function EventHandlerVoteDown(threadId) {
    const ThreadSelected = threads.find((item) => item.id === threadId);
    if (!ThreadSelected.downVotesBy.includes(profile.id)) {
      dispatch(asyncDownVoteThread({ threadId, userId: profile.id }));
    } else {
      EventHandlerNeutralize(threadId);
    }
  }

  useEffect(() => {
    dispatch(asyncGetThreadAndUsers());
  }, [dispatch]);

  const uniqueCategory = threads.length ? [...new Set(threads.map((item: GetThreadPayload) => item.category) as string[])] : [];

  return (
    <section>
      <div className="mb-8 px-1.5 py-0.5">
        <div className="flex flex-col items-start mx-12 my-8">
          <Typography className="mb-5 text-xl font-bold text-blue-gray-900" placeholder="" {...RequiredDefaultProps}>
            Popular Category
          </Typography>
          <div className="flex flex-wrap gap-3">
            {uniqueCategory.map((category, index) => {
              return (
                <Button
                  key={index}
                  className="text-sm font-normal text-blue-gray-900 hover:!text-indigo-700 bg-white border focus:text-indigo-700 active:text-indigo-700
                  active:border-solid active:border-2 active:border-indigo-700 focus:border-solid focus:border-2 focus:border-indigo-700 focus:outline-none"
                  variant="filled"
                  value={category}
                  size="sm"
                  {...RequiredDefaultProps}
                  placeholder={category}
                  onClick={() => {
                    filterThreadByCategory(category);
                  }}
                >
                  #{category}
                </Button>
              );
            })}
          </div>
        </div>
        {getThreadByCategory.length > 0 &&
          getThreadByCategory.map((thread: GetThreadPayload) => (
            <Card key={thread.id} className="mx-12 my-8" placeholder="" {...RequiredDefaultProps}>
              <CardBody placeholder="" {...RequiredDefaultProps}>
                <div className="flex items-center justify-start gap-4">
                  <Avatar src={users.find((item: GetUsersPayload) => item.id === thread.ownerId).avatar} size="md" placeholder={profile.name} {...RequiredDefaultProps} />
                  <Typography variant="h5" color="blue-gray" className="" placeholder="" {...RequiredDefaultProps}>
                    {users.find((item: GetUsersPayload) => item.id === thread.ownerId).name}
                  </Typography>

                  <Typography className="text-sm font-semibold" placeholder="" {...RequiredDefaultProps}>
                    {FormatDate(thread.createdAt)}
                  </Typography>
                </div>
                <div className="py-5 border-b-2 border-double border-blue-gray-50">
                  <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="" {...RequiredDefaultProps}>
                    <Link className="text-indigo-700" to={`/threads/${thread.id}`}>
                      {thread.title}
                    </Link>
                  </Typography>
                  <Typography color="gray" className="mb-4 text-justify" placeholder="" {...RequiredDefaultProps}>
                    {parse(thread.body)}
                  </Typography>
                  <Card
                    shadow={false}
                    className="px-4 py-2 text-sm font-normal border border-solid border-blue-gray-900 bg-blue-gray-50 text-blue-gray-900 hover:bg-indigo-700 hover:text-white w-fit"
                    placeholder=""
                    {...RequiredDefaultProps}
                  >
                    <Typography placeholder="" className="text-sm font-normal" {...RequiredDefaultProps}>
                      #{thread.category.toUpperCase()}
                    </Typography>
                  </Card>
                </div>
              </CardBody>
              <CardFooter placeholder="" {...RequiredDefaultProps} className="!pt-0 !px-6">
                <div className="flex gap-4">
                  <IconButton variant="text" className="px-6" placeholder="" {...RequiredDefaultProps}>
                    <div className="flex items-center justify-center gap-2">
                      <FaThumbsUp size={20} />
                      <Typography className="text-sm" placeholder="" {...RequiredDefaultProps}>
                        {thread.upVotesBy.length}
                      </Typography>
                    </div>
                  </IconButton>
                  <IconButton variant="text" className="px-6" placeholder="" {...RequiredDefaultProps}>
                    <div className="flex items-center justify-center gap-2">
                      <FaThumbsDown size={20} />
                      <Typography className="text-sm" placeholder="" {...RequiredDefaultProps}>
                        {thread.downVotesBy.length}
                      </Typography>
                    </div>
                  </IconButton>
                  <IconButton variant="text" className="px-6" placeholder="" {...RequiredDefaultProps}>
                    <div className="flex items-center justify-center gap-2">
                      <FaRegCommentDots size={20} />
                      <Typography className="text-sm" placeholder="" {...RequiredDefaultProps}>
                        {thread.totalComments}
                      </Typography>
                    </div>
                  </IconButton>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className="fixed right-8 bottom-8 text-size-2xl">
        {isLogin && (
          <IconButton {...RequiredDefaultProps} size="lg" placeholder="" variant="filled">
            <Link to="/add-discussion">
              <FaPlus size={20} color="white" />
            </Link>
          </IconButton>
        )}
      </div>
    </section>
  );
}

export default HomePage;
