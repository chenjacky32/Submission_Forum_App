import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/ThreadandUsers/action';
import { useEffect } from 'react';
import InputElement from './atoms/InputElement';
import ButtonElement from './atoms/ButtonElement';

export default function DiscussInput() {
  const [judul, onChangeJudul] = useInput('');
  const [kategori, onChangeKategori] = useInput('');
  const { addThread } = useSelector((state) => state.ThreadAndUser);
  const [body, onChangeBody] = useInput('');
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

  const StyleInput = {
    className: '!border-blue-gray-200 focus:!border-indigo-700 focus:!border-2 focus:!border-solid',
    labelProps: 'before:content-none after:content-none',
  };

  return (
    <div className="w-full max-w-4xl" onSubmit={HandleSubmit}>
      <form className="" aria-label="input-form">
        <InputElement typeInput="text" type="text" value={judul} onChange={onChangeJudul} size="md" title="Title" placeholder="Title" className={StyleInput.className} labelProps={StyleInput.labelProps} />
        <InputElement typeInput="text" type="text" value={kategori} onChange={onChangeKategori} size="md" title="Category" placeholder="Category" className={StyleInput.className} labelProps={StyleInput.labelProps} />
        <InputElement typeInput="textarea" type="text" value={body} onChange={onChangeBody} size="md" title="Body" placeholder="" className={StyleInput.className} labelProps={StyleInput.labelProps} />
        <ButtonElement title="Submit" size="md" type="submit" variant="filled" className="w-full text-sm font-bold bg-indigo-700" />
      </form>
    </div>
  );
}
