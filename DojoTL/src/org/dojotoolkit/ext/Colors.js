/*******************************************************************************
 * Copyright (c) 2012 eBay Inc. and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     eBay Inc. - initial API and implementation
 *******************************************************************************/
vjo.ctype('org.dojotoolkit.ext.Colors') //< public
//>needs(org.dojotoolkit.Dojo)
.globals({
	colors : undefined //<type::Colors
}, dojo)
.props({
	//>public Dojo.Color makeGrey(Number g, Number? a)
	makeGrey : vjo.NEEDS_IMPL
})
.options({
	metatype:true
})
.endType();