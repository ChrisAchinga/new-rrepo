import Image from 'next/image'

const Card = ({ airline, iata, icao, logo, fleet }) => {
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <div className='bd-placeholder-img card-img-top'>
          <Image
            className='rounded mx-auto d-block'
            width='100%'
            height='225'
            src='https://www.flightradar24.com/static/images/data/operators/JYH_logo0.png'
          />
        </div>

        <div className='card-body'>
          <p className='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                View
              </button>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                Edit
              </button>
            </div>
            <small className='text-muted'>9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
