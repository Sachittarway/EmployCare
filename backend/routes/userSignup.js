const express=require('express');
const {prescriptionss} = require('../models/prescription')
const { Employee } = require('../models/employee');
const router=express.Router();
 

/*Adding Doctor with this api*/
router.post('/add',async(req,res)=>{
    try {
        const { id, name } = req.body;
        const idCheck = await Employee.findOne({ id });
        if (idCheck)
          return res.json({ msg: "Employee Id already used", status: false });
        const user = await Employee.create({
          id,
          name
        });
        return res.json({ status: true, user });
    } 
    catch (ex) {
        console.log(ex)
        next(ex);
    }
})

router.post('/adddetails',async(req,res)=>{
    try {
        let a,b,c,d,e,f
        const { id, sugar, bp, sugars, bps, sugarss, bpss } = req.body;
        
        if(sugar>=150){
            a="High Sugar Level"
        }
        if(sugar<=80){
            a="Low Sugar Level"
        }
        if(sugar>80 && sugar<150){
            a="Maintained sugar level"
        }
        
        if(bp>=150){
            b="High Blood Pressure Level"
        }
        if(bp<=80){
            b="Low Blood Pressure Level"
        }
        if(bp>80 && bp<150){
            b="Maintained Blood Pressure level"
        }
        
        //Sugars and bps

        if(sugars>=150){
            c="High Sugar Level"
        }
        if(sugars<=80){
            c="Low Sugar Level"
        }
        if(sugars>80 && sugars<150){
            c="Maintained sugar level"
        }
        
        if(bps>=150){
            d="High Blood Pressure Level"
        }
        if(bps<=80){
            d="Low Blood Pressure Level"
        }
        if(bps>80 && bps<150){
            d="Maintained Blood Pressure level"
        }

        //sugarss and bpss

        if(sugarss>=150){
            e="High Sugar Level"
        }
        if(sugarss<=80){
            e="Low Sugar Level"
        }
        if(sugarss>80 && sugarss<150){
            e="Maintained sugar level"
        }
        
        if(bpss>=150){
            f="High Blood Pressure Level"
        }
        if(bpss<=80){
            f="Low Blood Pressure Level"
        }
        if(bpss>80 && bpss<150){
            f="Maintained Blood Pressure level"
        }
        const user = await prescriptionss.create({
          id,
          sugar,
          bp,
          notesugar:a,
          notebp:b,
          sugars,
          bps,
          notesugars:c,
          notebps:d,
          sugarss,
          bpss,
          notesugarss:e,
          notebpss:f
        });
        return res.json({ status: true, user });
    } 
    catch (ex) {
        console.log(ex)
        next(ex);
    }
})

router.get('/getdetails', async(req,res) =>{
    try{
        const pres = await prescriptionss.find();
        return res.json({ pres, status: true });
    }
    catch(ex){
        console.log(ex);
        next(ex);
    }
})





router.get('/getdetailss/:id', async(req,res) =>{
    try{
        const ids = req.params.id
        const pres = await prescriptionss.find({ id:ids });
        if (pres.length === 0)
            return res.json({ msg: "Incorrect Employee Id", status: false });
        return res.json({ pres, status: true });
    }
    catch(ex){
        console.log(ex);
        return res.json({ status: false });
    }
})


module.exports=router ;