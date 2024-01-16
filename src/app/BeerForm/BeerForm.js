'use client'
// import { beerStyles } from '../utils/beerStyles';
import { useForm } from 'react-hook-form';

const BeerForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/beers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      // Handle successful form submission
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting the form:', error.message);
    }
  };

  // List of US states
  // const usStates = [
  //   'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  //   'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //   'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  //   'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  //   'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  //   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  //   'West Virginia', 'Wisconsin', 'Wyoming',
  // ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Image:
          <input type="file" {...register('image')} />
        </label>

        <label>
          Brewery:
          <input type="text" {...register('brewery')} />
        </label>
      </div>

      <div>
        <label>
          Beer Name:
          <input type="text" {...register('name')} />
        </label>

        <label>
          Beer Style:
          <input type="text" {...register('style')} />
        </label>

        <label>
          ABV:
          <input type="number" {...register('abv')} />
        </label>

        <label>
          IBU:
          <input type="number" {...register('ibu')} />
        </label>
      </div>

      {/* <div>
        <label>
          City:
          <input type="text" {...register('city')} />
        </label>

        <label>
          State:
          <select {...register('state')}>
            <option value="" disabled defaultValue>
              Choose a State
            </option>
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
      </div> */}

      <div>        
        <label>
          Description:
          <input type="textarea" {...register('description')} />
        </label>
      </div>       

      <button type="submit">Submit</button>
    </form>
  );
};

export default BeerForm;
