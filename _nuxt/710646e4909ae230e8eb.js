(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{431:function(n,e,t){"use strict";t.r(e),e.default='async def main():\n    await db.set_bind("postgresql://localhost/gino")\n\n    # Create tables\n    await db.gino.create_all()\n\n    # Create object, "id" is assigned by database\n    u1 = await User.create(nickname="fantix")\n    print(u1.id, u1.nickname)  # 1 fantix\n\n    # Returns all user objects with "d" in their nicknames\n    users = await User.query.where(User.nickname.contains("d")).gino.all()\n    print(users)\n\n    # Find one user object, None if not found\n    user = await User.query.where(User.nickname == "daisy").gino.first()\n    print(user)\n\n    # Execute complex statement and return command status\n    status, result = (\n        await User.update.values(nickname="No." + db.cast(User.id, db.Unicode))\n        .where(User.id > 10)\n        .gino.status()\n    )\n    print(status)  # UPDATE 8\n\n    # Iterate over the results of a large query in a transaction as required\n    async with db.transaction():\n        async for u in User.query.order_by(User.id).gino.iterate():\n            print(u.id, u.nickname)\n\n\nasyncio.get_event_loop().run_until_complete(main())\n'}}]);