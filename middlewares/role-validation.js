
exports.IsUser = async (request, response, next) => {
    console.log(request.user.role)
    if (request.user.role == "user") {
      next();
    }
    else{
        return response.status(401).json({
            success: false,
            auth: false,
            message: `No no kamu bukan user yang valid`
        })
    }
  }
exports.IsAdmin = async (request, response, next) => {
    if (request.user.role == "admin") {
        next();
    }
    else{
        return response.status(401).json({
            success: false,
            auth: false,
            message: `No no kamu bukan admin`
        })
    }
  }

