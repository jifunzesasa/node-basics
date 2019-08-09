Tank.findById(id, function (err, tank) {
    if (err) return handleError(err);

    tank.size = 'large';
    tank.save(function (err, updatedTank) {
        if (err) return handleError(err);
        res.send(updatedTank);
    });
});



//  set

Tank.findById(id, function (err, tank) {
    if (err) return handleError(err);

    tank.set({ size: 'large' });
    tank.save(function (err, updatedTank) {
        if (err) return handleError(err);
        res.send(updatedTank);
    });
});