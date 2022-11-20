import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSession } from '../firebase/UserProvider';
import { firestore } from '../firebase/config';
import { updateButterfly } from '../firebase/butterflies';
import { ProfileImage } from '../ProfileImage';

const Butterfly = () => {
  const { user } = useSession();
  const params = useParams();
  const { register, setValue, handleSubmit } = useForm();
  const [butterfly, setButterfly] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const docRef = firestore.collection('butterflies').doc(params.id);
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        setButterfly(documentData);
        const formData = Object.entries(documentData).map((entry) => ({
          [entry[0]]: entry[1],
        }));

        setValue(formData);
      }
    });
    return unsubscribe;
  }, [setValue, params.id]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateButterfly({ id: params.id, ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!butterfly) {
    return null;
  }

  const formClassname = `ui big form twelve wide column ${isLoading ? 'loading' : ''}`;

  return (
    <div
      className="add-form-container"
      style={{ maxWidth: 960, margin: '50px auto' }}
    >
      <div className="ui grid stackable">
        <ProfileImage id={params.id} />
        <form className={formClassname} onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
          <div className="four wide field">
          <label>
                ID: 
                {params.id}
              </label>
          </div>
            <div className="four wide field">
              <label>
                Name
                <input type="text" name="name" ref={register} />
              </label>
            </div>
            <div className="two wide field">
              <label>
                Date
                <input type="date" name="date" ref={register} />
              </label>
            </div>
            <div className="three wide field">
              <label>
                Sex
                <select name="sex"  ref={register} >
                 <option value="F">Female</option>
                 <option value="M">Male</option>
                <option value="">Undefined</option>
            </select>
              </label>
            </div>
          </div>
         ( {user} ? <button
            type="submit"
            className="ui submit large grey button right floated"  >
            Submit
          </button>
         )
        </form>
      </div>
    </div>
  );
};

export default Butterfly;
