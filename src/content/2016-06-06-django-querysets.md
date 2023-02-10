---
title: "Django querysets"
date: "2016-06-06"
draft: false
path: "/blog/django-querysets/"
---

# Comparing queryset

Using Django ORM can lead to interesting problems - especially regarding logic operators.

## Introduction

Let's introduce a problem by writing a simple query to fetch all active Users.

```python
> User.objects.filter(is_acitve=True)
[<User: eggs@test.com>, <User: bacon@test.com>, <User: spam@test.com>]
```

Naturally you can test if it's empty using Querysets `exists` method, but what would happen if you try to compare it to something else. Let's say empty list?

```python
> User.objects.filter(is_acitve=True) == []
False
```

What if we tried to take a look at inactive users and try the same comparison.

```python
> User.objects.filter(is_acitve=False)
[]
> User.objects.filter(is_acitve=False) == []
False
```

This is of course "normal" behavior since types don't match right?

```python
> User.objects.all() == User.objects.all()
False
```

The result may seem unexpected or even misleading but it actually works in favor of Django ORM - because `QuerySet` class represents only lazy database lookup for a set of objects.

What happens when you have to compare two querysets for identity when it doesn't give proper results for most obvious examples? Here's couple ideas how to handle this problem.

# Solutions

## Use Counter

Dict subclass for counting hashable items.  Sometimes called a bag or multiset.  Elements are stored as dictionary key and their counts are stored as dictionary values.

```python
from collections import Counter
Counter(queryset_a) == Counter(queryset_b)
```

## Use simple set comparison

Very basic solution is to simply cast querysets to `set` to perform comparison.

```python
set(queryset_a) == set(queryset_b)
```

**Important remark: don't cast to `list` because then querysets can have different orders or may contain duplicates which will skew the results.**