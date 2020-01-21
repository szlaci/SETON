//****************** web server
var http = require('express')();
var server = require('http').Server(http);
var path = require('path');
var io = require('socket.io')(server);

server.listen(9999);

http.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './web') });
});
http.get('/index2.html', function (req, res) {
	  res.sendFile('index2.html', { root: path.join(__dirname, './web') });
	});
http.get('/index_1.html', function (req, res) {
	  res.sendFile('index_1.html', { root: path.join(__dirname, './web') });
	});
http.get('/index_2.html', function (req, res) {
	  res.sendFile('index_2.html', { root: path.join(__dirname, './web') });
	});
/* serves all the static files */
http.get(/^(.+)$/, function(req, res){ 
  //console.log('static file request : ' + req.params);
  res.sendFile( __dirname + req.params[0]); 
});


// *************** DÁTUM KÜLDÉS
var dateSend = function ()
{
  // böngészőbe
  io.emit('dateSend', "MACHINE01 " + "SHIFT: " + getShift() + " " + formatDate());
  
  selectShiftAvgData('cm01/tbl001',0);
  selectShiftAvgData('cm01/tbl002',0);
  selectShiftAvgData('cm01/tbl003',0);
  selectShiftAvgData('cm01/tbl004',0);
  selectShiftAvgData('cm01/tbl005',0);
  selectShiftAvgData('cm01/tbl006',0);
  selectShiftAvgData('cm01/tbl007',0);
  selectShiftAvgData('cm01/tbl008',0);
  
};
dateSendv = setInterval(dateSend, 10000); 


// átlag adat változók
var vAvgTime = '00:00', vAvgn = '0';
var AvgTime001 = '00:00', AvgTime002 = '00:00', AvgTime003 = '00:00', AvgTime004 = '00:00',
    AvgTime005 = '00:00', AvgTime006 = '00:00', AvgTime007 = '00:00', AvgTime008 = '00:00';
var n001 = '0', n002 = '0', n003 = '0', n004 = '0',
    n005 = '0', n006 = '0', n007 = '0', n008 = '0'; 
    

// *************** ÓRA 01
seconds01 = 0;
minutes01 = 0;

var timer01 = function ()
{
    
  // ******** idő
  seconds01++;
  if (seconds01 >= 60)
  {
  	minutes01++;
  	seconds01 = 0;
  	if (minutes01 >= 100)
  	{
  	   seconds01 = 0;
  	   minutes01 = 0;
  	}
  }

  //
  //process.stdout.write(minutes01+':'+seconds01+'\033[0G');
  
  // böngészőbe
  io.emit('table001', minutes01.pad(2)+':'+seconds01.pad(2)+' / '+n001+' / '+AvgTime001);
  // részletes adatok
  io.emit('table01', minutes01.pad(2)+':'+seconds01.pad(2), n001, AvgTime001);
  
};
time01 = setInterval(timer01, 1000); 


//*************** ÓRA 02
seconds02 = 0;
minutes02 = 0;

var timer02 = function ()
{
    
  // ******** idő
  seconds02++;
  if (seconds02 >= 60)
  {
  	minutes02++;
  	seconds02 = 0;
  	if (minutes02 >= 100)
  	{
  	   seconds02 = 0;
  	   minutes02 = 0;
  	}
  }

  //
  //process.stdout.write(minutes02+':'+seconds02+'\033[0G');
  
  // böngészőbe
  io.emit('table002', minutes02.pad(2)+':'+seconds02.pad(2)+' / '+n002+' / '+AvgTime002);
  // részletes adatok
  io.emit('table02', minutes02.pad(2)+':'+seconds02.pad(2), n002, AvgTime002);
  
};
time02 = setInterval(timer02, 1000); 

//*************** ÓRA 03
seconds03 = 0;
minutes03 = 0;

var timer03 = function ()
{
    
  // ******** idő
  seconds03++;
  if (seconds03 >= 60)
  {
  	minutes03++;
  	seconds03 = 0;
  	if (minutes03 >= 100)
  	{
  	   seconds03 = 0;
  	   minutes03 = 0;
  	}
  }

  //
  //process.stdout.write(minutes02+':'+seconds02+'\033[0G');
  
  // böngészőbe
  io.emit('table003', minutes03.pad(2)+':'+seconds03.pad(2)+' / '+n003+' / '+AvgTime003);
  // részletes adatok
  io.emit('table03', minutes03.pad(2)+':'+seconds03.pad(2), n003, AvgTime003);
  
};
time03 = setInterval(timer03, 1000); 

//*************** ÓRA 04
seconds04 = 0;
minutes04 = 0;

var timer04 = function ()
{
    
  // ******** idő
  seconds04++;
  if (seconds04 >= 60)
  {
  	minutes04++;
  	seconds04 = 0;
  	if (minutes04 >= 100)
  	{
  	   seconds04 = 0;
  	   minutes04 = 0;
  	}
  }

  //
  //process.stdout.write(minutes02+':'+seconds02+'\033[0G');
  
  // böngészőbe
  io.emit('table004', minutes04.pad(2)+':'+seconds04.pad(2)+' / '+n004+' / '+AvgTime004);
  // részletes adatok
  io.emit('table04', minutes04.pad(2)+':'+seconds04.pad(2), n004, AvgTime004);
  
};
time04 = setInterval(timer04, 1000); 


//*************** ÓRA 05
seconds05 = 0;
minutes05 = 0;

var timer05 = function ()
{
    
  // ******** idő
  seconds05++;
  if (seconds05 >= 60)
  {
  	minutes05++;
  	seconds05 = 0;
  	if (minutes05 >= 100)
  	{
  	   seconds05 = 0;
  	   minutes05 = 0;
  	}
  }

  //
  //process.stdout.write(minutes05+':'+seconds05+'\033[0G');
  
  // böngészőbe
  io.emit('table005', minutes05.pad(2)+':'+seconds05.pad(2)+' / '+n005+' / '+AvgTime005);
  // részletes adatok
  io.emit('table05', minutes05.pad(2)+':'+seconds05.pad(2), n005, AvgTime005);
  
};
time05 = setInterval(timer05, 1000); 


//*************** ÓRA 06
seconds06 = 0;
minutes06 = 0;

var timer06 = function ()
{
    
  // ******** idő
  seconds06++;
  if (seconds06 >= 60)
  {
  	minutes06++;
  	seconds06 = 0;
  	if (minutes06 >= 100)
  	{
  	   seconds06 = 0;
  	   minutes06 = 0;
  	}
  }

  //
  //process.stdout.write(minutes06+':'+seconds06+'\033[0G');
  
  // böngészőbe
  io.emit('table006', minutes06.pad(2)+':'+seconds06.pad(2)+' / '+n006+' / '+AvgTime006);
  // részletes adatok
  io.emit('table06', minutes06.pad(2)+':'+seconds06.pad(2), n006, AvgTime006);
  
};
time06 = setInterval(timer06, 1000); 


//*************** ÓRA 07
seconds07 = 0;
minutes07 = 0;

var timer07 = function ()
{
    
  // ******** idő
  seconds07++;
  if (seconds07 >= 60)
  {
  	minutes07++;
  	seconds07 = 0;
  	if (minutes07 >= 100)
  	{
  	   seconds07 = 0;
  	   minutes07 = 0;
  	}
  }

  //
  //process.stdout.write(minutes07+':'+seconds07+'\033[0G');
  
  // böngészőbe
  io.emit('table007', minutes07.pad(2)+':'+seconds07.pad(2)+' / '+n007+' / '+AvgTime007);
  // részletes adatok
  io.emit('table07', minutes07.pad(2)+':'+seconds07.pad(2), n007, AvgTime007);
  
};
time07 = setInterval(timer07, 1000);


//*************** ÓRA 08
seconds08 = 0;
minutes08 = 0;

var timer08 = function ()
{
    
  // ******** idő
  seconds08++;
  if (seconds08 >= 60)
  {
  	minutes08++;
  	seconds08 = 0;
  	if (minutes08 >= 100)
  	{
  	   seconds08 = 0;
  	   minutes08 = 0;
  	}
  }

  //
  //process.stdout.write(minutes08+':'+seconds08+'\033[0G');
  
  // böngészőbe
  io.emit('table008', minutes08.pad(2)+':'+seconds08.pad(2)+' / '+n008+' / '+AvgTime008);
  // részletes adatok
  io.emit('table08', minutes08.pad(2)+':'+seconds08.pad(2), n008, AvgTime008);
  
};
time08 = setInterval(timer08, 1000); 


// ******************* szenzorok 5-1, 6-2, 13-3, 19-4, 26-5, 16-6, 20-7, 21-8
var Gpio = require('onoff').Gpio;

/*
// ******************* szenzor01
var sensor01 = new Gpio(4, 'in', 'none');
var led01 = new Gpio(2, 'high');

sensor01.watch(function (err, value) {  
  if (err) {
    throw err;
  };
  
 
 if (sensor01.readSync() === 0)
 {
 	// óra leáll
    clearInterval(time01);
    led01.writeSync(1);
   
   // idő adatok adatbázisba
   if ((minutes01 >= 1) && (minutes01 <= 9))
   {
     insertRow(minutes01+' minutes '+seconds01+' seconds','table001','172.16.5.101');
     //minutes01 = 0; seconds01 = 0;
   }
   
   console.log('**************sensor01_0!');
   // 
   io.emit('table001stop', '');
   
 } else
 {
    // óra indul
    minutes01 = 0; seconds01 = 0;
    clearInterval(time01);
    time01 = setInterval(timer01, 1000);

    led01.writeSync(0);
  
    console.log('**************sensor01_1!');
    // 
    io.emit('table001start', '');
 }
});
*/


// ******************* szenzor01
var sensor01 = new Gpio(5, 'in', 'none');
var sensor01count = 0;
var sensor01toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor01.readSync() === 1) && (sensor01count < 5))
  {sensor01count++;}
  if ((sensor01.readSync() === 0) && (sensor01count > -10))
  {sensor01count--;}
}, 300);

setInterval(function()
{
  if ((sensor01count <= -10) && (sensor01toggle === 0))
  {
  	// óra leáll
    clearInterval(time01);
    sensor01count  = 0;
    sensor01toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes01 >= 2)
   {
     insertRow(minutes01+' minutes '+seconds01+' seconds','cm01/tbl001','172.16.5.101');
   }
   
   io.emit('table001stop', '');
  }
  if ((sensor01count > 4) && (sensor01toggle === 1))
  {
  	// óra indul
    minutes01 = 0; seconds01 = 0;
    clearInterval(time01);
    time01 = setInterval(timer01, 1000);
    sensor01count  = 5; 
    sensor01toggle = 0;
  
    io.emit('table001start', '');
  }
},2000);


// ******************* szenzor02
var sensor02 = new Gpio(6, 'in', 'none');
var sensor02count = 0;
var sensor02toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor02.readSync() === 1) && (sensor02count < 5))
  {sensor02count++;}
  if ((sensor02.readSync() === 0) && (sensor02count > -10))
  {sensor02count--;}
}, 300);

setInterval(function()
{
  if ((sensor02count <= -10) && (sensor02toggle === 0))
  {
  	// óra leáll
    clearInterval(time02);
    sensor02count  = 0;
    sensor02toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes02 >= 2)
   {
     insertRow(minutes02+' minutes '+seconds02+' seconds','cm01/tbl002','172.16.5.101');
   }
   
   io.emit('table002stop', '');
  }
  if ((sensor02count > 4) && (sensor02toggle === 1))
  {
  	// óra indul
    minutes02 = 0; seconds02 = 0;
    clearInterval(time02);
    time02 = setInterval(timer02, 1000);
    sensor02count  = 5; 
    sensor02toggle = 0;
  
    io.emit('table002start', '');
  }
},2000);


// ******************* szenzor03
var sensor03 = new Gpio(13, 'in', 'none');
var sensor03count = 0;
var sensor03toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor03.readSync() === 1) && (sensor03count < 5))
  {sensor03count++;}
  if ((sensor03.readSync() === 0) && (sensor03count > -10))
  {sensor03count--;}
}, 300);

setInterval(function()
{
  if ((sensor03count <= -10) && (sensor03toggle === 0))
  {
  	// óra leáll
    clearInterval(time03);
    sensor03count  = 0;
    sensor03toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes03 >= 2)
   {
     insertRow(minutes03+' minutes '+seconds03+' seconds','cm01/tbl003','172.16.5.101');
   }
   
   io.emit('table003stop', '');
  }
  if ((sensor03count > 4) && (sensor03toggle === 1))
  {
  	// óra indul
    minutes03 = 0; seconds03 = 0;
    clearInterval(time03);
    time03 = setInterval(timer03, 1000);
    sensor03count  = 5; 
    sensor03toggle = 0;
  
    io.emit('table003start', '');
  }
},2000);


// ******************* szenzor04
var sensor04 = new Gpio(19, 'in', 'none');
var sensor04count = 0;
var sensor04toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor04.readSync() === 1) && (sensor04count < 5))
  {sensor04count++;}
  if ((sensor04.readSync() === 0) && (sensor04count > -10)) // 0
  {sensor04count--;}
}, 300);

setInterval(function()
{
  if ((sensor04count <= -10) && (sensor04toggle === 0)) // 4
  {
  	// óra leáll
    clearInterval(time04);
    sensor04count  = 0;
    sensor04toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes04 >= 2)
   {
     insertRow(minutes04+' minutes '+seconds04+' seconds','cm01/tbl004','172.16.5.101');
   }
   
   io.emit('table004stop', '');
  }
  if ((sensor04count > 4) && (sensor04toggle === 1))
  {
  	// óra indul
    minutes04 = 0; seconds04 = 0;
    clearInterval(time04);
    time04 = setInterval(timer04, 1000);
    sensor04count  = 5; 
    sensor04toggle = 0;
  
    io.emit('table004start', '');
  }
},2000);


// ******************* szenzor05
var sensor05 = new Gpio(26, 'in', 'none');
var sensor05count = 0;
var sensor05toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor05.readSync() === 1) && (sensor05count < 5))
  {sensor05count++;}
  if ((sensor05.readSync() === 0) && (sensor05count > -10))
  {sensor05count--;}
}, 300);

setInterval(function()
{
  if ((sensor05count <= -10) && (sensor05toggle === 0))
  {
  	// óra leáll
    clearInterval(time05);
    sensor05count  = 0;
    sensor05toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes05 >= 2)
   {
     insertRow(minutes05+' minutes '+seconds05+' seconds','cm01/tbl005','172.16.5.101');
   }
   
   io.emit('table005stop', '');
  }
  if ((sensor05count > 4) && (sensor05toggle === 1))
  {
  	// óra indul
    minutes05 = 0; seconds05 = 0;
    clearInterval(time05);
    time05 = setInterval(timer05, 1000);
    sensor05count  = 5; 
    sensor05toggle = 0;
  
    io.emit('table005start', '');
  }
},2000);


// ******************* szenzor06
var sensor06 = new Gpio(16, 'in', 'none');
var sensor06count = 0;
var sensor06toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor06.readSync() === 1) && (sensor06count < 5))
  {sensor06count++;}
  if ((sensor06.readSync() === 0) && (sensor06count > -10))
  {sensor06count--;}
}, 300);

setInterval(function()
{
  if ((sensor06count <= -10) && (sensor06toggle === 0))
  {
  	// óra leáll
    clearInterval(time06);
    sensor06count  = 0;
    sensor06toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes06 >= 2)
   {
     insertRow(minutes06+' minutes '+seconds06+' seconds','cm01/tbl006','172.16.5.101');
   }
   
   io.emit('table006stop', '');
  }
  if ((sensor06count > 4) && (sensor06toggle === 1))
  {
  	// óra indul
    minutes06 = 0; seconds06 = 0;
    clearInterval(time06);
    time06 = setInterval(timer06, 1000);
    sensor06count  = 5; 
    sensor06toggle = 0;
  
    io.emit('table006start', '');
  }
},2000);


// ******************* szenzor07
var sensor07 = new Gpio(20, 'in', 'none');
var sensor07count = 0;
var sensor07toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor07.readSync() === 1) && (sensor07count < 5))
  {sensor07count++;}
  if ((sensor07.readSync() === 0) && (sensor07count > -10))
  {sensor07count--;}
}, 300);

setInterval(function()
{
  if ((sensor07count <= -10) && (sensor07toggle === 0))
  {
  	// óra leáll
    clearInterval(time07);
    sensor07count  = 0;
    sensor07toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes07 >= 2)
   {
     insertRow(minutes07+' minutes '+seconds07+' seconds','cm01/tbl007','172.16.5.101');
   }
   
   io.emit('table007stop', '');
  }
  if ((sensor07count > 4) && (sensor07toggle === 1))
  {
  	// óra indul
    minutes07 = 0; seconds07 = 0;
    clearInterval(time07);
    time07 = setInterval(timer07, 1000);
    sensor07count  = 5; 
    sensor07toggle = 0;
  
    io.emit('table007start', '');
  }
},2000);


// ******************* szenzor08
var sensor08 = new Gpio(21, 'in', 'none');
var sensor08count = 0;
var sensor08toggle = 0;

// bemenet ellenőrzés 300mSec
setInterval(function()
{
  if ((sensor08.readSync() === 1) && (sensor08count < 5))
  {sensor08count++;}
  if ((sensor08.readSync() === 0) && (sensor08count > -10))
  {sensor08count--;}
}, 300);

setInterval(function()
{
  if ((sensor08count <= -10) && (sensor08toggle === 0))
  {
  	// óra leáll
    clearInterval(time08);
    sensor08count  = 0;
    sensor08toggle = 1;
   
   // idő adatok adatbázisba
   if (minutes08 >= 2)
   {
     insertRow(minutes08+' minutes '+seconds08+' seconds','cm01/tbl008','172.16.5.101');
   }
   
   io.emit('table008stop', '');
  }
  if ((sensor08count > 4) && (sensor08toggle === 1))
  {
  	// óra indul
    minutes08 = 0; seconds08 = 0;
    clearInterval(time08);
    time08 = setInterval(timer08, 1000);
    sensor08count  = 5; 
    sensor08toggle = 0;
  
    io.emit('table008start', '');
  }
},2000);



//********************** postgresql
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '172.16.5.15',
  database: 'postgres',
  password: 'admin2011',
  port: 5432,
  connectionTimeoutMillis: 10000,
});

pool.on('error', function(err, client)
{
  console.error('Unexpected error on idle client', err);
  //process.exit(-1);
});

function insertRow(time,station_name,station_ip)    
{
  pool.connect( function(err, client, done)
  {
    if (err) throw err;
    
    client.query("INSERT INTO seton_prod.table_stopper(time,station_name,station_ip) VALUES($1,$2,$3)", [time,station_name,station_ip], function (err, result) 
    {
      done();
      if(err) {console.log('Insert: ', err);}
      else 
      {
        console.log('insert ok!');
        selectShiftAvgData(station_name,1);
      }
    });
  });
};


//  mai aktuális műszak átlagai
function selectShiftAvgData(station_name, conlog)    
{
  var moment = require('moment');
    
  pool.query("SELECT * from seton_prod.table_daily_avg where station_name=$1 and shift_date=to_date($2,'YYYY-MM-DD') and shift=$3", [station_name,moment().format('YYYY-M-DD'),getShift()], function (err, res) 
  {
    if(err) {console.log(moment().format(), ' Select: ', err);}
    else 
    {
      if (res.rowCount > 0)
      {
      if ((res.rows[0].avg_time.minutes === undefined) || (res.rows[0].avg_time.seconds === undefined)) {}
      else
      {
        vAvgTime = res.rows[0].avg_time.minutes.pad(2)+':'+res.rows[0].avg_time.seconds.pad(2);
        vAvgn    = res.rows[0].n;
      }
      if (conlog) console.log(moment().format(), ' CONLOG!!!!:', vAvgTime, vAvgn, ' row: ', res.rows);  
      
      setAvg(station_name, vAvgTime, vAvgn);
     }
     else if (conlog)
       {
       	// ha nincs adat: 0
       	console.log('row count < 0: ', res.rowCount,station_name,moment().format('YYYY-M-DD'),getShift());
       	vAvgTime = 0; vAvgn = 0;
       	setAvg(station_name, vAvgTime, vAvgn);
       }
    }    
    //pool.end();
  });
};

// átlag adatok böngészőbe
function setAvg(station_name, vAvgTime, vAvgn)
{
  //
  if (station_name.substr(5, 6) === 'tbl001')
  {
    AvgTime001 = vAvgTime;
    n001    = vAvgn;
    // böngészőbe
    io.emit('table001', minutes01.pad(2)+':'+seconds01.pad(2)+' / '+n001+' / '+AvgTime001);
    // részletes adatok
    io.emit('table01', minutes01.pad(2)+':'+seconds01.pad(2), n001, AvgTime001);
  };
  if (station_name.substr(5, 6) === 'tbl002')
  {
    AvgTime002 = vAvgTime;
    n002    = vAvgn;
    // böngészőbe
    io.emit('table002', minutes02.pad(2)+':'+seconds02.pad(2)+' / '+n002+' / '+AvgTime002);
    // részletes adatok
    io.emit('table02', minutes02.pad(2)+':'+seconds02.pad(2), n002, AvgTime002);
  };
  if (station_name.substr(5, 6) === 'tbl003')
  {
    AvgTime003 = vAvgTime;
    n003    = vAvgn;
    // böngészőbe
    io.emit('table003', minutes03.pad(2)+':'+seconds03.pad(2)+' / '+n003+' / '+AvgTime003);
    // részletes adatok
    io.emit('table03', minutes03.pad(2)+':'+seconds03.pad(2), n003, AvgTime003);
  };
  if (station_name.substr(5, 6) === 'tbl004')
  {
    AvgTime004 = vAvgTime;
    n004    = vAvgn;
    // böngészőbe
    io.emit('table004', minutes04.pad(2)+':'+seconds04.pad(2)+' / '+n004+' / '+AvgTime004);
    // részletes adatok
    io.emit('table04', minutes04.pad(2)+':'+seconds04.pad(2), n004, AvgTime004);
  };
  if (station_name.substr(5, 6) === 'tbl005')
  {
    AvgTime005 = vAvgTime;
    n005    = vAvgn;
    // böngészőbe
    io.emit('table005', minutes05.pad(2)+':'+seconds05.pad(2)+' / '+n005+' / '+AvgTime005);
    // részletes adatok
    io.emit('table05', minutes05.pad(2)+':'+seconds05.pad(2), n005, AvgTime005);
  };
  if (station_name.substr(5, 6) === 'tbl006')
  {
    AvgTime006 = vAvgTime;
    n006    = vAvgn;
    // böngészőbe
    io.emit('table006', minutes06.pad(2)+':'+seconds06.pad(2)+' / '+n006+' / '+AvgTime006);
    // részletes adatok
    io.emit('table06', minutes06.pad(2)+':'+seconds06.pad(2), n006, AvgTime006);
  };
  if (station_name.substr(5, 6) === 'tbl007')
  {
    AvgTime007 = vAvgTime;
    n007    = vAvgn;
    // böngészőbe
    io.emit('table007', minutes07.pad(2)+':'+seconds07.pad(2)+' / '+n007+' / '+AvgTime007);
    // részletes adatok
    io.emit('table07', minutes07.pad(2)+':'+seconds07.pad(2), n007, AvgTime007);
  };
  if (station_name.substr(5, 6) === 'tbl008')
  {
    AvgTime008 = vAvgTime;
    n008    = vAvgn;
    // böngészőbe
    io.emit('table008', minutes08.pad(2)+':'+seconds08.pad(2)+' / '+n008+' / '+AvgTime008);
    // részletes adatok
    io.emit('table08', minutes08.pad(2)+':'+seconds08.pad(2), n008, AvgTime008);
  };
  
  
}


// műszak...
function getShift()    
{
  var d = new Date(),
      shift = 1;
      
  // műszak száma
  if ((d.getHours() >= 22) || (d.getHours() <  6)) shift = 3;
  if ((d.getHours() >= 14) && (d.getHours() < 22)) shift = 2;
  if ((d.getHours() >=  6) && (d.getHours() < 14)) shift = 1;
  
  //console.log(shift);
  
  return shift;
}



//lpad...
String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
};

//pad...
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
};

// date...
function formatDate() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
