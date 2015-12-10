/**
 * Created by Livia on 2015/12/10.
 */
module.exports = {
    Helloworld: function(req, res){
        return res.json({Hello: 'Hello World!'});

    },
    add:function(req,res){
        var  User = {
            Name:'Livia',
            password:'123456'
        };
        req.model.user.create(User).exec(function(err,result){
            res.json({Result:result,error:err});
        });
    },
    viewUser: function(req, res){
        var page = parseInt(req.query.page, 10) ? parseInt(req.query.page, 10) : 1;
        var limit = parseInt(req.query.limit, 10) ? parseInt(req.query.limit, 10) : 1;
        req.model.user.find().paginate({page:page,limit:limit}).exec(function (err, result){
            res.json({Result: result});
        });
    }
}