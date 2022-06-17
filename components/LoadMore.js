export default function LoadMore({ tweets }) {
    return (
      <div className='mt-10 flex justify-center'>
        <button
          className=' justify-self-center border px-8 py-2 mt-0 mr-2 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover '
          onClick={async () => {
            const lastTweetId = tweets[tweets.length - 1].id
            const res = await fetch(`/api/tweets?take=2&cursor=${lastTweetId}`)
          }}
        >
          Load more
        </button>
      </div>
    )
  }