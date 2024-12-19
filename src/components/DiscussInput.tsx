import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/ThreadandUsers/action';
import { useEffect } from 'react';

export default function DiscussInput() {
  const [judul, onChangeJudul] = useInput('');
  const [kategori, onChangeKategori] = useInput('');
  const [body, onChangeBody] = useInput('');
  const { addThread } = useSelector((state) => state.ThreadAndUser);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function HandleSubmit(e) {
    e.preventDefault();
    dispatch(asyncAddThread({ title: judul, body, category: kategori }));
  }

  useEffect(() => {
    if (addThread) {
      Navigate('/');
    }
  }, [addThread, Navigate]);

  return (
    <div className="container-form" onSubmit={HandleSubmit}>
      <form className="discussion-form">
        <input type="text" placeholder="title" value={judul} onChange={onChangeJudul} />
        <input type="text" placeholder="kategori" value={kategori} onChange={onChangeKategori} />
        <textarea type="text" placeholder="body" value={body} onChange={onChangeBody} />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
