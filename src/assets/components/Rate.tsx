import star  from '../images/star.svg';


function Rate({setRate, rate, setSubmit}) {
    let rateScors = [1,2,3,4,5]
    return (
    <div className='rateCard'>
        <section className='starOval'>
            <img src={star} alt="star-icon" />
        </section>
        <section className='middleSection'>
            <h2 className='question'>How did we do?</h2>
            <p className='questionText'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </section>
        <section className='numbersSection'>
            {rateScors.map((item) => <button onClick={() => setRate(item)} key={item} className='numbers' style={rate === item ? {background: "#FC7614", color: "white"} : {}}>{item}</button>)}
        </section>
        <button onClick={() => {rate ? setSubmit(true) : null}}>submit</button>
    </div>
    )
}

export default Rate