import React from 'react';

const LeaderBoards = () => {
    return (
        <div className='container'>
            <h1 className="heading">
                <div className="scroll-container">
                    <span className="scroll-text">LeaderBoards <i className="fa-solid fa-chess-king" style={{ color: '#56bf4f' }}></i></span>
                </div>
            </h1>
            <div className='box'>
                <div className='basic-backtest'>
                    <div className='basic-backtest-row'>
                        <p>Basic Backtest <i className="fa-regular fa-circle-check fa-beat" style={{ color: '#56bf4f' }}></i></p>
                        <div className="mb-2 input-group">
                            <span className="input-group-text">Slippage</span>
                            <select className="form-select">
                                <option value="0">0%</option>
                                <option value="0.5">0.5%</option>
                                <option value="1">1%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='tbl'>
                    <table className="table">
                        <thead className="table-light">
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Calmar Ratio</th>
                                <th>Overall Profit</th>
                                <th>Avg. Daily Profit</th>
                                <th>Win % (Day)</th>
                                <th>Price (Rs)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Selling with re entr
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 3.96
                                </td>
                                <td>
                                    381845
                                </td>
                                <td>
                                    319.54
                                </td>
                                <td>
                                    0.65
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    strategy_name
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 3.62
                                </td>
                                <td>
                                    268872.5
                                </td>
                                <td>
                                    216.31
                                </td>
                                <td>
                                    0.64
                                </td>
                                <td>
                                    500
                                </td>
                                <td>
                                    <a href='/'>Buy <i className="fa-solid fa-handshake-simple" style={{ color: '#56bf4f', marginLeft: '8px' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Based on premium and
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 3.42
                                </td>
                                <td>
                                    255425
                                </td>
                                <td>
                                    208.51
                                </td>
                                <td>
                                    0.64
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    strategy_name
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 3.22
                                </td>
                                <td>
                                    370845
                                </td>
                                <td>
                                    303.47
                                </td>
                                <td>
                                    0.65
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    strategy_name
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 3.22
                                </td>
                                <td>
                                    370845
                                </td>
                                <td>
                                    303.47
                                </td>
                                <td>
                                    0.65
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    6
                                </td>
                                <td>
                                    Based on premium wit
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 3.01
                                </td>
                                <td>
                                    135980
                                </td>
                                <td>
                                    185.77
                                </td>
                                <td>
                                    0.49
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    7
                                </td>
                                <td>
                                    strategy_name
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 2.76
                                </td>
                                <td>
                                    267867.5
                                </td>
                                <td>
                                    218.49
                                </td>
                                <td>
                                    0.6
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    8
                                </td>
                                <td>
                                    Wait and trade_Save
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 2.62
                                </td>
                                <td>
                                    178252.5
                                </td>
                                <td>
                                    161.9
                                </td>
                                <td>
                                    0.63
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    9
                                </td>
                                <td>
                                    iron condor
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 2.44
                                </td>
                                <td>
                                    176420
                                </td>
                                <td>
                                    137.51
                                </td>
                                <td>
                                    0.65
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    10
                                </td>
                                <td>
                                    strategy_name
                                </td>
                                <td>
                                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#56bf4f' }}></i> 2.04
                                </td>
                                <td>
                                    244555
                                </td>
                                <td>
                                    198.66
                                </td>
                                <td>
                                    0.62
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <a href='/'>View <i className="fa-solid fa-circle-info " style={{ color: '#56bf4f' }}></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default LeaderBoards;