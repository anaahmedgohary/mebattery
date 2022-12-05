import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

// CSS
import "./style/homepage.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// JS
import $ from "jquery";
import { json } from 'react-router-dom';

export default function HomePage()
{
    
    const [littleExpend, setLittleExpend] = useState(0);
    const [mildExpend, setMildExpend] = useState(0);
    const [deepExpend, setDeepExpend] = useState(0);
   
    // storedMeBattery &&= "new value"; only if storedMeBattery is truthy
    // (?? not ||) so if it's (0 or "") wouldnt give null 
    
    let storedMeBattery = JSON.parse(sessionStorage.getItem("meBatteryLog")) ?? 100;

    // const [meBattery, setMeBattery] = useState(100);
    const [meBattery, setMeBattery] = useState(storedMeBattery);
   // setMeBattery(storedMeBattery);
    const [batteryState, setBatteryState] = useState("PERFECTion");

    // useEffect(() =>
    // {
    //     setMeBattery(storedMeBattery);
    // },[])
    
    
    useEffect(() =>
    {
        $("#batteryEle").css("width", `${meBattery}%`);
        sessionStorage.setItem("meBatteryLog", JSON.stringify(meBattery));
        // console.log($("#meBattery").val())
        console.log(meBattery)
        // sessionStorage.setItem("meBatteryValLog", JSON.stringify($("#meBattery").val()));
        // setBatteryState
        // 40 < meBattery && meBattery < 50 ? setBatteryState("GreenZone") : (console.log("False"), setBatteryState("RedZone"));
        // setBatteryState("RedZone")
        meBattery >= 50 ? (setBatteryState("GreenZone"), console.log("GreenZone")) : meBattery < 50 ? (setBatteryState("RedZone"), console.log("RedZone")) : console.log("falso");

        meBattery <= 0 ? ($(".drainBtn").attr("disabled", true), setMeBattery(0)) : $(".drainBtn").attr("disabled", false);
        meBattery >= 100 ? ($(".chargeBtn").attr("disabled", true), setMeBattery(100)) : $(".chargeBtn").attr("disabled", false);

        setLevel(meBattery);

    }, [meBattery])

    // what is this???
    const [sessHandel, setSessHandel] = useState();
    useEffect(() =>
    {
        
        let sessel = JSON.parse(sessionStorage.getItem("meBatteryLog"));
        setSessHandel(sessel);
    });
    // fixes 1 step latency

   
    
    useEffect(() =>
    {
        $("#cscontanor").css("display", "none");

    }, []);


    // for posting comments
    const baseURL = "https://backend-mebattery.vercel.app/mebattery";
    const [comment, setComment] = useState();
    const [level, setLevel] = useState();

    const [savedComm, setSavedComm] = useState();

    function submitHandler(e)
    {
        e.preventDefault();
       // setLevel(meBattery);

        axios
            .post(`${baseURL}/commentlevel`, { comment: `${comment}`, level: `${level}` })
            .then((response) =>
            {
                setSavedComm(response.data)
            })
    }

    
    
    

    return (<div className='homepage'>
      
        <div className='container'>
            <h1 className='text-center'>Welcome To</h1>
            <h2 className='text-center'>Your Brand New Day</h2>
            <h4 className='text-center border border-dark border-4'>monitor your energy levels during your day with notes</h4>
        </div>
        <div>
            <nav className='row row-cols-1 justify-content-center text-center'>
                <ul className='row row-cols-1 list-unstyled'>
                    
                    <li>
                        <a href="/savednotes" className='btn btn-dark' target="_blank" rel="noopener noreferrer">Saved Notes</a>
                    </li>
                    {/* <li>
                        <a href="/dataposter" className='btn btn-dark' target="_blank" rel="noopener noreferrer">Data poster</a>
                    </li> */}
                </ul>
            </nav>
        </div>

        <div className='ssfds d-flex justify-content-around align-items-center'>

            <button className='btn btn-primary col-3'
                onClick={(e) =>
                {
                    // $("#ExpendtsCatalog").toggleClass("d-flex");
                    $("#cscontanor").slideToggle(1000);
                    // $(e.target).text("Hide")
                    $(e.target).text($(e.target).text() == "Show Controls" ? "Hide Controls" : "Show Controls")
                }}
            >
                Show Controls 
            </button>

            <button className='btn btn-success col-3'
                onClick={() =>
                {
                    setMeBattery(100);
                }}
            >
                Reset Battery
            </button>
        </div>

        <div className='catcont' id='cscontanor'>
            <div id='ExpendtsCatalog' className='row row-cols-auto  text-center d-flex gap-4 justify-content-center py-4'>
                
                <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-center'>
                    <p>(1 Unit)</p>
                    <button id='addOnePoint'
                        onClick={() =>
                        {
                            setMeBattery(meBattery - 1);
                        }}
                        className="drainBtn btn btn-info">Drain (-1)
                    </button>

                    <button
                        onClick={() =>
                        {
                            setMeBattery(meBattery + 1);
                        }}
                        className="chargeBtn btn btn-success">Charge (+1)
                    </button>
                </div>

                <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-center'>
                    <p> (5 Units)</p>
                    <button id='addlittleExpend'
                        onClick={() =>
                        {
                            setMeBattery(meBattery - 5);
                        }}
                        className="drainBtn btn btn-info">Drain (-5)
                    </button>

                    <button
                        onClick={() =>
                        {
                            setMeBattery(meBattery + 5);
                        }}
                        className="chargeBtn btn btn-success">Charge (+5)
                    </button>
                </div>

                <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-center'>
                    <p>(10 Units)</p>
                    <button id='addjustExpend'
                        onClick={() =>
                        {
                            setMeBattery(meBattery - 10);
                        }}
                        className="drainBtn btn btn-info">Drain (-10)
                    </button>

                    <button
                        onClick={() =>
                        {
                            setMeBattery(meBattery + 10);
                        }}
                        className="chargeBtn btn btn-success">Charge (+10)
                    </button>
                </div>
            
                <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-center'>
                    <p>(20 Units)</p>
                    <button id='addmildExpend'
                        onClick={() =>
                        {
                            setMeBattery(meBattery - 20);
                        }}
                        className="drainBtn btn btn-info">Drain (-20)
                    </button>

                    <button
                        onClick={() =>
                        {
                            setMeBattery(meBattery + 20);
                        }}
                        className="chargeBtn btn btn-success">Charge (+20)
                    </button>
                </div>
            
                <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-center'>
                    <p>(40 Units)</p>
                    <button
                        id='addDeepExpend'
                        onClick={() =>
                        {
                            setMeBattery(meBattery - 40);
                        }}
                        className="drainBtn btn btn-info">Drain (-40)
                    </button>

                    <button
                        onClick={() =>
                        {
                            setMeBattery(meBattery + 40);
                        }}
                        className="chargeBtn btn btn-success">Charge (+40)
                    </button>
                </div>

                <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-center'>
                    <p>(50 Units)</p>
                    <button
                        id='addReallyDeep'
                        onClick={() =>
                        {
                            // meBattery < 50 ? console.log("not enough") :
                            setMeBattery(meBattery - 50);
                        }}
                        className="drainBtn btn btn-info">Drain (-50)
                    </button>

                    <button
                        onClick={() =>
                        {
                            setMeBattery(meBattery + 50);
                        }}
                        className="chargeBtn btn btn-success">Charge (+50)
                    </button>
                </div>

                
            
            </div>
        </div>

        <div className='record-container'>

            <div className='ExpendsRecord row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>

                <div className='LittelExpendsDiv text-center d-grid justify-content-center align-items-center gy-4 py-4 border-4 border'>

                    <div className='Expends-cat'>
                        <p className='h4 pb-4'>Save a note</p>
                    </div>

                    <div className='save-comment-div'>

                        <form id='commentForm' className='row gy-3' onSubmit={submitHandler}>

                           <div>
                                <label className='col-4' htmlFor="level">Battery Level</label>
                             {/* value={meBattery} OROR onChange={(e) => { setLevel(e.target.value) }} */}
                                <input type="text" value={meBattery} readOnly name='level' id='level' className='col-8 text-center bg-gradient bg-info' />
                            </div>
                            
                            <div>
                                <label className='col-4' htmlFor="comment">Your note</label>
                                <input className='col-8 text-center' type="text" name='comment' id='comment' onChange={(e) => { setComment(e.target.value) }} />
                            </div>

                            <input type="submit" value="Save Note" id='saveCom' className='btn btn-success' />
                        </form>
                    </div>
                    <div className='results-div'>
                        {/* <div>
                            <p>{comment}</p>
                            <p>{level}</p>
                        </div> */}
                        <p className='border border-1 border-danger h5'>{savedComm}</p>
                    </div>
                </div>

                {/* <div className='mildExpendsDiv text-center'>
                    <div className='Expends-cat'>
                        <p className='m-0'>Mild Drainage (-10)</p>
                    </div>
                    <div className='Expends-input-div'>
                        <h3>{mildExpend} Times Today</h3>
                    </div>
                    <div className='petdegree'>
                        <p>Common expenditure of daily life</p>
                    </div>
                </div> */}
                {/* <div className='DeepExpendsDiv text-center'>
                    <div className='Expends-cat'>
                        <p className='m-0'>Critical Drainage (-40)</p>
                    </div>
                    <div className='Expends-input-div'>
                        
                        <h3>{deepExpend} Times Today</h3>
                    </div>
                    <div className='petdegree'>
                        <p>Can't take more than two of these.</p>
                    </div>
                </div> */}
            </div>

        </div>
        <div className='text-center'>
            <div className='d-none'>
                <input
                    type="range"
                    min={0} max={100}
                    name="mebattery"
                    id="meBattery"
                    value={meBattery}
                    readOnly
                    required
                    onChange={() =>
                    {
                        console.log($("#meBattery").val())
                    }}
                />
            </div>
        </div>

        <div className='battery-div position-relative mt-5 overflow-hidden rounded-pill'>
            <div id='batteryEle' className='battery-Ele'>
            </div>

            <div className='position-absolute top-50 start-50 translate-middle'>
                <h1>{meBattery} %</h1>
            </div>
        </div>

        <div className='my-4'>
            <h2 className='text-center'>Energy is at: {batteryState}</h2>
        </div>


       
        {/* <div>
            <h1>{sessHandel}</h1>
        </div> */}




























          
    </div>
  )
}
